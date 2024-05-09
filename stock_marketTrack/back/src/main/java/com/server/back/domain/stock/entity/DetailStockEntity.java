package com.server.back.domain.stock.entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@SuperBuilder
@Table(name = "detail_stock") // JPA는 언더스코어로 구분
public class DetailStockEntity {

    @Id
    @Column(name = "detail_stock_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long detailStockId;

}
