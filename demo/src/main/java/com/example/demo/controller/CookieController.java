package com.example.demo.controller;


import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CookieController {

    @GetMapping("/api/test-cookie")
    public void testCookie(HttpServletResponse res){
        String cookieValue = "cookie-test=123456; Max-Age=3600; Path=/; Secure; SameSite=None";
        res.addHeader("Set-Cookie", cookieValue);
        return ;
    }
//    @GetMapping("/api/test-cookie")
//    public ResponseEntity<String> testCookie(HttpServletRequest request) {
//        System.out.println("✅ 요청 받음");
//        try {
//            // 쿠키 처리 로직
//            return ResponseEntity.ok("쿠키 처리 성공");
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("서버 오류");
//        }
//    }


}
