package com.von.api.crawler;


import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CrawlerController {
    private CrawlerServiceImpl service = CrawlerServiceImpl.getInstance();
    public Map<String,?> findBugsMusic(Scanner sc) throws IOException {
        System.out.println("크롤링할 주소를 입력하시오.");
        String url = sc.next();
        Map<String, String> paramMap = new HashMap<>();
        paramMap.put("URL",url);

        return service.findNamesFromWeb(paramMap);
    }

    public Map<String,?> findMelonMusic(Scanner sc) throws IOException {
        System.out.println("크롤링할 주소를 입력하시오.");
        String url = sc.next();
        Map<String, String> paraMap = new HashMap<>();
        paraMap.put("URL",url);

        return service.findMelonFromweb(paraMap);
    }
}
