package com.server.back.domain.stock.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EnterNameReqDto {
    private String stockName;
}
