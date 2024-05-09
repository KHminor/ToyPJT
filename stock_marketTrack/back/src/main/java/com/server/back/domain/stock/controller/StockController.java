package com.server.back.domain.stock.controller;


import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import java.io.IOException;

@Slf4j
@RestController
@RequestMapping("/scrap")
@RequiredArgsConstructor
public class StockController {

    @GetMapping("")
    @ApiOperation(value="주식 데이터 조회")
    public void getStockScrap() throws IOException {
        Document doc = Jsoup.connect("https://finance.naver.com/sise/sise_quant.naver?sosok=0").get();
        Elements rows = doc.select("table.type_2 tbody tr"); // 위 링크에 있는 tbody에 있는 tr 데이터를 모두 조회
        for (Element row : rows) {
            // 각 행에서 데이터 추출
            String 종목명 = row.select("td:nth-child(2) a").text();
            String 전일비 = row.select("td:nth-child(4)").text();
            String 등락률 = row.select("td:nth-child(5)").text();
            String[] 전일비_li = 전일비.split(" ");
            // NaN 값이 포함되지 않은 행만 처리
            if (!종목명.isEmpty() && !전일비.isEmpty() && !등락률.isEmpty()) {
                // 여기에 NaN 값이 포함되지 않은 행에 대한 추가 작업을 수행합니다.
                System.out.println(종목명);
                if (전일비_li[0].substring(0,2).equals("보합")) {
                    System.out.print("- ");
                    System.out.println(전일비_li[0].substring(2));
                } else {
                    System.out.print(전일비_li[0].equals("상승")?"↑ ":"↓ ");
                    System.out.println(전일비_li[1]);
                }
                System.out.println(등락률);
                System.out.println("=============");
            }
        }
    }
}
