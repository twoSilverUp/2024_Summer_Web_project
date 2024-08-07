package com.example.Backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity     //해당 클래스가 엔티티임을 선언, 클래스 필드를 바탕으로 DB에 테이블 생성
@Table(name = "USERS")  // 테이블 이름을 USERS로 변경
@Getter    //각 필드 값을 조회할 수 있는 getter 메서드 자동 생성
@Setter //각 필드 값을 생성할 수 있는 setter 메서드 자동 생성
@ToString   //모든 필드를 출력할 수 있는 toString 메서드 자동 생성
@AllArgsConstructor //모든 필드를 매개변수로 갖는 생성자 자동 생성
@NoArgsConstructor  //매개변수가 아예 없는 기본 생성자 자동 생성
public class User {
    @Id
    private int id;
    @Column
    private String pw;
    @Column
    private String name;
    @Column
    private String phone;
    @Column
    private String ssn;
}
