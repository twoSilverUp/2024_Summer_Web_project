package com.example.Backend.dto;

import com.example.Backend.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor     //모든 필드를 포함하는 생성자 자동 생성
@NoArgsConstructor      //매개변수 없는 기본 생성자 자동 생성
@Getter                 //getter 메서드 자동 생성
@ToString               //클래스의 모든 필드 포함하는 'toString()'메서드 자동 생성
public class UserDto {
    private String id;
    private String pw;
    private String name;
    private String phone;
    private String ssn;

    public User toEntity() {
        return new User(id, pw, name, phone, ssn);
    }
}
