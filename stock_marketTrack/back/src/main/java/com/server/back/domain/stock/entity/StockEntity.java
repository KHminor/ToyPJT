package com.server.back.domain.stock.entity;

import com.server.back.domain.common.entity.CreateEntity;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;


@Entity
@Getter
@NoArgsConstructor
//@AllArgsConstructor
@SuperBuilder
@Table(name = "stock")
public class StockEntity extends CreateEntity {

    @Id
    @Column(name = "stock_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stockId;

}
