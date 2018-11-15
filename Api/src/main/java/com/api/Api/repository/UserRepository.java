package com.api.Api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.api.Api.models.Utilisateur;

@Repository
public interface UserRepository extends JpaRepository<Utilisateur,Long> {
     
	 public Utilisateur findOneById(Long id);
	 public Utilisateur findByEmail(String email);
     public Utilisateur findByPhone(Long phone);
     public Utilisateur findByPassword(String password);
     public Utilisateur findByEmailOrPhone(String email, Long phone);
     
     @Transactional
     @Modifying
     @Query("update Utilisateur u set u.token = :token where u.id = :id")
     public int setToken(@Param("token") String token, @Param("id") Long id);
}
