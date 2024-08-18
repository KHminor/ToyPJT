package com.server.back.config;

import com.server.back.handler.SignalingSocketHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        // WebSocket 핸들러를 "/ws" 경로에 매핑
        registry.addHandler(new SignalingSocketHandler(), "/ws")
                .setAllowedOrigins("*"); // 필요한 도메인만 허용할 수도 있습니다.
    }
}