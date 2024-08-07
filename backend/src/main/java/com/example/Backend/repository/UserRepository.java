package com.example.Backend.repository;

import com.example.Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;    //더 안전하게 처리하기 위함

public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(value="select name from users where id= :userId", nativeQuery = true)
    Optional<String> findById(int userId);
}
