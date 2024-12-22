package com.server.back.handler;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class SignalingSocketHandler extends TextWebSocketHandler {

    // 클라이언트 ID와 WebSocketSession을 저장
    private final Map<String, WebSocketSession> sessions = new HashMap<>();
    private int clientIdCounter = 0; // 클라이언트 ID 생성용 카운터

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        // 새 클라이언트 ID 생성
        String clientId = "client-" + clientIdCounter++;
        sessions.put(clientId, session);

        // 접속된 클라이언트 목록을 문자열로 변환
        String clientList = sessions.keySet().stream()
                .map(id -> "\"" + id + "\"") // 문자열로 감싸기
                .collect(Collectors.joining(", "));
        System.out.println("Client connected: " + clientId);
        System.out.println("Current clients: " + clientList);

        // 클라이언트에게 현재 클라이언트 목록 전송
        String clientListMessage = String.format("{\"type\":\"clients\",\"clients\":[%s]}", clientList);
        sendToAll(new TextMessage(clientListMessage));
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        // 클라이언트 ID 찾기 및 제거
        String clientIdToRemove = sessions.entrySet().stream()
                .filter(entry -> entry.getValue().equals(session))
                .map(Map.Entry::getKey)
                .findFirst()
                .orElse(null);

        if (clientIdToRemove != null) {
            sessions.remove(clientIdToRemove);
            System.out.println("Client disconnected: " + clientIdToRemove);
            System.out.println("Current clients: " + String.join(", ", sessions.keySet()));

            // 클라이언트 목록을 업데이트하여 모든 클라이언트에게 전송
            String clientList = sessions.keySet().stream()
                    .map(id -> "\"" + id + "\"") // 문자열로 감싸기
                    .collect(Collectors.joining(", "));
            String clientListMessage = String.format("{\"type\":\"clients\",\"clients\":[%s]}", clientList);
            sendToAll(new TextMessage(clientListMessage));
        }
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // 메시지 브로드캐스팅
        sendToAll(message);
    }

    private void sendToAll(TextMessage message) throws Exception {
        for (WebSocketSession webSocketSession : sessions.values()) {
            if (webSocketSession.isOpen()) {
                webSocketSession.sendMessage(message);
            }
        }
    }
}


