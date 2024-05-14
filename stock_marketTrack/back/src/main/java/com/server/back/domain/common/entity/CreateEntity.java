package com.server.back.domain.common.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@MappedSuperclass // 부모 클래스를 테이블로 매핑하지 않고, 자식 클래스에게 매핑 정보를 제공하는 용도로 사용하기 위함
@NoArgsConstructor
@Getter
@SuperBuilder
@Setter
public class CreateEntity {
    @CreatedDate
    @Column(updatable = false)
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class) // 자바의 LocalDateTime 타입을 DB에서 사용할 수 있도록 변환
    private LocalDateTime createdAt;
}
