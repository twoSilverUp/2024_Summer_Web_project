package com.example.Backend.controller;

import com.example.Backend.dto.SigninRequestDto;
import com.example.Backend.exception.UserNotFoundException;
import com.example.Backend.repository.UserRepository;
import com.example.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SigninController {
    @Autowired
    private UserService userService;
    UserRepository userRepository;
    // 회원 정보 저장
    @PostMapping("/signin")
    public ResponseEntity<String> signIn(@RequestBody SigninRequestDto dto){
        //서비스에 위임
        boolean result = userService.validatePw(dto.getId(),dto.getPw());
        //결과 응답
        if(result) return ResponseEntity.status(HttpStatus.OK).body(null);
        else {
            throw new UserNotFoundException("로그인 실패");
        }
    }

}
