package com.example.Backend.service;

import com.example.Backend.exception.UserNotFoundException;
import com.example.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public String name(int userId) {
        return userRepository.findById(userId).orElseThrow(()-> new UserNotFoundException("User with id "+userId + " not found"));
    }
}
