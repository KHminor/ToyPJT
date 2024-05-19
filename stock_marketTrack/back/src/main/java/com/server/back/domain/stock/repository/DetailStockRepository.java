package com.server.back.domain.stock.repository;

import com.server.back.domain.stock.entity.DetailStockEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DetailStockRepository extends JpaRepository<DetailStockEntity, Long> {
    List<DetailStockEntity> findAllByStock_StockId(Long stockId);
    List<DetailStockEntity> findByStock_StockId(Long stockId);
}
