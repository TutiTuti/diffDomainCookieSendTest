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
        Cookie cookie = new Cookie("cookie-test", "123456");
        cookie.setMaxAge(3600); // 1시간
        cookie.setPath("/"); // 모든 경로에 대해 쿠키 적용
        cookie.setSecure(true); // Secure 쿠키 (HTTPS에서만 전달)
        cookie.setHttpOnly(false); // JS에서 접근하려면 false (XSS 주의)
//        cookie.setDomain("front.local"); // 클라이언트 도메인에 맞게 설정
        res.addCookie(cookie);
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
