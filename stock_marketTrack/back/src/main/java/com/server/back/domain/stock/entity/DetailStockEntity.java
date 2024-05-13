package com.server.back.domain.stock.entity;

import com.server.back.domain.common.entity.CreateEntity;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@SuperBuilder
@Table(name = "detail_stock") // JPA는 언더스코어로 구분
public class DetailStockEntity extends CreateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long detailStockId;

    @NotNull
    private String stockName;

//    @NotNull
//    private BigDecimal ;

    @ManyToOne
    @JoinColumn(name = "stock_id")
    private StockEntity stock;

}
