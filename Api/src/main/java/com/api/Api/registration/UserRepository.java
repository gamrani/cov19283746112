package com.api.Api.registration;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.Api.models.Utilisateur;

@Repository
public interface UserRepository extends JpaRepository<Utilisateur,Long> {
     public Utilisateur findByEmail(String email);
     public Utilisateur findByPhone(Long phone);
}
