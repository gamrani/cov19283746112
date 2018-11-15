package com.api.Api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.Api.models.Ville;

@Repository
public interface CitiesRepository extends JpaRepository<Ville, Long> {
   public Ville findByVille(String ville);
}
