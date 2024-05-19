package com.server.back.domain.stock.dto;

import com.server.back.domain.stock.entity.StockEntity;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class DetailStockReqDto {
    private String stockName;
    private Integer lastRate;
    private BigDecimal fluctuationRate;
}
