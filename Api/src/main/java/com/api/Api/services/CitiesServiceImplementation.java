package com.api.Api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.Api.models.Ville;
import com.api.Api.repository.CitiesRepository;

@Service
public class CitiesServiceImplementation implements CitiesService {

	@Autowired
	public CitiesRepository dao;
	
	public List<Ville> findAllCities() {
		return dao.findAll();
	}



}
