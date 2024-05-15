package com.server.back.domain.stock.controller;


import com.server.back.domain.stock.dto.DetailStockReqDto;
import com.server.back.domain.stock.service.StockService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;


@Slf4j
@RestController
@RequestMapping("/scrap")
@RequiredArgsConstructor
public class StockController {

    private final StockService stockService;


//    @Scheduled(cron = "0 */4 9-14 * * 1-5")
//    @Scheduled(cron = "0 0-30/4 15 * * 1-5")
//    public void getStockScrapScheduled() throws IOException{
//        stockService.saveStockService();
//    }

    @GetMapping("")
    @ApiOperation(value="주식 데이터 크롤링")
    public void getStockScrapScheduled() throws IOException{
        stockService.saveStockService();
    }

    @GetMapping("/all")
    @ApiOperation(value="주식 데이터 크롤링")
    public List<DetailStockReqDto> getStockScrap() {
//        stockService.saveStockService();
        return stockService.getAllStockService();
    }

//    @GetMapping("/{}")
//    @ApiOperation(value="특정 회차 데이터 조회")
//    public void getStockData(){
//        stockService.saveStockService();
//    }
}
