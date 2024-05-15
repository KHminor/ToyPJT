package com.server.back.domain.stock.entity;

import com.server.back.domain.common.entity.CreateEntity;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Entity
@Getter
@Setter
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Table(name = "detail_stock") // JPA는 언더스코어로 구분
public class DetailStockEntity extends CreateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long detailStockId;

    @NotNull
    private String stockName;

    @NotNull
    private Integer lastRate;

    @NotNull
    private BigDecimal fluctuationRate;

    @ManyToOne
    @JoinColumn(name = "stock_id")
    private StockEntity stock;

}
