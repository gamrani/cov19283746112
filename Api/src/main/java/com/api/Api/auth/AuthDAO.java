package com.api.Api.auth;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.Api.models.User;

@Repository
public interface AuthDAO extends JpaRepository<User,Long> {
     public User findByEmail(String email);
     public User findByPhone(Long phone);
}
