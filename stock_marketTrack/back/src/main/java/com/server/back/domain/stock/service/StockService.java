package com.server.back.domain.stock.service;

import com.server.back.domain.stock.dto.DetailStockReqDto;
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
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
        System.out.println("조회 완료");
    }

    public List<DetailStockReqDto> getAllStockService() {
        List<DetailStockEntity> detailStockEntityList = detailStockRepository.findAll();
        List<DetailStockReqDto> detailStockReqDtoList = new ArrayList<>();
        for (DetailStockEntity detailStock: detailStockEntityList) {
            DetailStockReqDto stock = DetailStockReqDto.builder()
                    .stockName(detailStock.getStockName())
                    .lastRate(detailStock.getLastRate())
                    .fluctuationRate(detailStock.getFluctuationRate())
                    .build();
            detailStockReqDtoList.add(stock);
        }
        return detailStockReqDtoList;
    }

    public List<DetailStockEntity> getSpecificDateStockDataService(String clickDate){
        // 현재 하고자 하는 건
        // 특정 stockId를 찾은 다음 detailStockEntity의 데이터 중 stockId와 같은 모든 데이터를 찾기
        List<StockEntity> stockEntities = stockRepository.findAll();
        List<DetailStockEntity> detailStockEntities = new ArrayList<>();

        for (StockEntity stock: stockEntities) {
            if (stock.getCreatedAt().toString().split("T")[0].equals(clickDate)) {
                detailStockEntities.addAll(detailStockRepository.findAllByStock_StockId(stock.getStockId())); // addAll
            }
        }
        return detailStockEntities;
    }

    public List<DetailStockReqDto> lastDetailStockData() {
        StockEntity stock = stockRepository.findTopByOrderByStockIdDesc();
        List<DetailStockEntity> detailStockEntities = detailStockRepository.findAllByStock_StockId(stock.getStockId());
        return detailStockEntities.stream()
                .map(detailStock -> DetailStockReqDto.builder()
                        .stockName(detailStock.getStockName())
                        .lastRate(detailStock.getLastRate())
                        .fluctuationRate(detailStock.getFluctuationRate())
                        .build()).collect(Collectors.toList());
    }
}