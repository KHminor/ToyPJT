package com.server.back.domain.stock.controller;


import com.server.back.domain.stock.service.StockService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;


@Slf4j
@RestController
@RequestMapping("/scrap")
@RequiredArgsConstructor
public class StockController {

    private final StockService stockService;

    @GetMapping("")
    @ApiOperation(value="주식 데이터 크롤링")
    public void getStockScrap() throws IOException {
        stockService.saveStockService();
    }

//    @GetMapping("/{}")
//    @ApiOperation(value="특정 회차 데이터 조회")
//    public void getStockData(){
//        stockService.saveStockService();
//    }
}
