package com.server.back.domain.stock.repository;


import com.server.back.domain.stock.entity.EnterNameEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnterNameRepository extends JpaRepository<EnterNameEntity, String> {
}
