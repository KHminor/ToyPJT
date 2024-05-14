package com.server.back.domain.stock.service;

import com.server.back.domain.stock.entity.DetailStockEntity;
import com.server.back.domain.stock.entity.StockEntity;
import com.server.back.domain.stock.repository.DetailStockRepository;
import com.server.back.domain.stock.repository.StockRepository;
import lombok.RequiredArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StockService {

    private final StockRepository stockRepository;
    private final DetailStockRepository detailStockRepository;

    public void saveStockService() throws IOException {
        Document doc = Jsoup.connect("https://finance.naver.com/sise/sise_quant.naver?sosok=0").get();
        Elements rows = doc.select("table.type_2 tbody tr"); // 위 링크에 있는 tbody에 있는 tr 데이터를 모두 조회

        StockEntity stock = new StockEntity();
        stock.setCreatedAt(LocalDateTime.now());
        StockEntity saveStock = stockRepository.save(stock);

        List<DetailStockEntity> detailStockList = new ArrayList<>();

        for (Element row : rows) {
            // 각 행에서 데이터 추출
            String 종목명 = row.select("td:nth-child(2) a").text();
            String 전일비 = row.select("td:nth-child(4)").text().replaceAll(",","");
            String 등락률 = row.select("td:nth-child(5)").text();
            String[] 전일비_li = 전일비.split(" ");
            // NaN 값이 포함되지 않은 행만 처리
            Integer cnt = 0;
            if (!종목명.isEmpty() && !전일비.isEmpty() && !등락률.isEmpty()) {
                System.out.println(++cnt);

                Integer lastRate = 0;
                if (전일비_li[0].substring(0,2).equals("보합")) {
                    lastRate = Integer.parseInt(전일비_li[0].substring(2));
                    System.out.println(전일비_li[0].substring(2));
                }
                else if (전일비_li[0].equals("상승")){ lastRate = Integer.parseInt(전일비_li[1]);}
                else {lastRate = Integer.parseInt(전일비_li[1])*-1;}

                BigDecimal fluctuationRate = new BigDecimal(등락률.replaceAll("%",""));

                DetailStockEntity detailStock = DetailStockEntity.builder()
                        .stockName(종목명)
                        .lastRate(lastRate)
                        .fluctuationRate(fluctuationRate)
                        .stock(saveStock)
                        .createdAt(saveStock.getCreatedAt())
                        .build();

                detailStockList.add(detailStock);
            }
            detailStockRepository.saveAll(detailStockList);
        }
    }

}
