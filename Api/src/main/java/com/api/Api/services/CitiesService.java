package com.api.Api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.Api.models.Ville;

@Service
public interface CitiesService {

	public List<Ville> findAllCities();
}
