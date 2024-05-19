package com.server.back.domain.stock.repository;

import com.server.back.domain.stock.entity.StockEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface StockRepository extends JpaRepository<StockEntity,Long> {
    List<StockEntity> findByCreatedAtBetween(LocalDateTime startDateTime, LocalDateTime endDateTime);

    StockEntity findTopByOrderByStockIdDesc();
}
