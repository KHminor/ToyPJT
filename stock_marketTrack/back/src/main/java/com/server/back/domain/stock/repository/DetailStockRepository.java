package com.server.back.domain.stock.repository;

import com.server.back.domain.stock.entity.DetailStockEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailStockRepository extends JpaRepository<DetailStockEntity, Long> {
}
