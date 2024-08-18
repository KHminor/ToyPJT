import React, { useEffect, useRef, useState } from 'react';

const WebRTCComponent = () => {
    const localVideoRef = useRef(null);
    const [remoteStreams, setRemoteStreams] = useState([]); // 원격 스트림을 관리하는 상태
    const peerConnections = useRef(new Map());
    const socket = useRef(null);
    const [isSocketConnected, setIsSocketConnected] = useState(false);

    useEffect(()=> {
        console.log(remoteStreams);
        
    },[remoteStreams])
    useEffect(() => {
        socket.current = new WebSocket('ws://localhost:8080/ws');

        socket.current.onopen = () => {
            console.log('WebSocket connected');
            setIsSocketConnected(true);
        };

        socket.current.onclose = () => {
            console.log('WebSocket disconnected');
            setIsSocketConnected(false);
        };

        socket.current.onerror = (error) => {
            console.error('WebSocket error:', error);
            setIsSocketConnected(false);
        };

        socket.current.onmessage = handleSignalingMessage;

        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                localVideoRef.current.srcObject = stream;
                createPeerConnection(stream);
            })
            .catch(error => {
                console.error('Error accessing media devices:', error);
            });

        return () => {
            peerConnections.current.forEach(pc => pc.close());
            if (socket.current) {
                socket.current.close();
            }
        };
    }, []);

    const createPeerConnection = (stream) => {
        const pc = new RTCPeerConnection();

        stream.getTracks().forEach(track => {
            pc.addTrack(track, stream);
        });

        pc.ontrack = event => {
            const remoteStream = event.streams[0];
            setRemoteStreams(prevStreams => {
                if (!prevStreams.includes(remoteStream)) {
                    return [...prevStreams, remoteStream];
                }
                return prevStreams;
            });
        };

        pc.onicecandidate = event => {
            if (event.candidate) {
                console.log('Sending ICE candidate:', event.candidate);
                if (isSocketConnected) {
                    socket.current.send(JSON.stringify({
                        type: 'candidate',
                        candidate: event.candidate,
                    }));
                } else {
                    console.error('WebSocket is not connected.');
                }
            }
        };

        peerConnections.current.set(pc, { stream });

        if (peerConnections.current.size === 1) {
            createOffer(pc);
        }
    };

    const handleSignalingMessage = async (message) => {
        const data = JSON.parse(message.data);

        if (data.type === 'offer') {
            console.log('Handling offer');
            const pc = new RTCPeerConnection();
            peerConnections.current.set(pc, { stream: null });
            await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
            if (isSocketConnected) {
                console.log('Sending answer');
                socket.current.send(JSON.stringify({ type: 'answer', answer }));
            } else {
                console.error('WebSocket is not connected.');
            }
        } else if (data.type === 'answer') {
            console.log('Handling answer');
            peerConnections.current.forEach(async (pc, key) => {
                if (!pc.remoteDescription) {
                    await pc.setRemoteDescription(new RTCSessionDescription(data.answer));
                }
            });
        } else if (data.type === 'candidate') {
            console.log('Handling ICE candidate');
            peerConnections.current.forEach(async (pc, key) => {
                if (pc.remoteDescription) {
                    await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
                }
            });
        }
    };

    const createOffer = async (pc) => {
        try {
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            if (isSocketConnected) {
                console.log('Sending offer');
                socket.current.send(JSON.stringify({ type: 'offer', offer }));
            } else {
                console.error('WebSocket is not connected.');
            }
        } catch (error) {
            console.error('Error creating offer:', error);
        }
    };

    const handleConnectClick = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                createPeerConnection(stream);
            })
            .catch(error => {
                console.error('Error accessing media devices:', error);
            });
    };

    return (
        <div>
            <video ref={localVideoRef} autoPlay playsInline muted />
            <button onClick={handleConnectClick}>Connect</button>
            {/* 원격 스트림이 추가될 때마다 새로운 비디오 태그 생성 */}
            {remoteStreams.map((stream, index) => (
                <video key={index} autoPlay playsInline ref={video => { if (video) video.srcObject = stream; }} />
            ))}
        </div>
    );
};

export default WebRTCComponent;
