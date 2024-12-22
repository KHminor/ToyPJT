package com.server.back.domain.stock.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
public class DetailStockTimeReqDto {
    private String stockName;
    private Integer lastRate;
    private BigDecimal fluctuationRate;
    private LocalDateTime createdAt;
}
