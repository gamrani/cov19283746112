package com.api.Api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.Api.models.Ville;
import com.api.Api.services.CitiesService;
import com.api.Api.services.CitiesServiceImplementation;

@RestController
@RequestMapping("/cities")
@CrossOrigin(origins = "*")
public class CitiesController {

	@Autowired
	private CitiesServiceImplementation service;
	
	@GetMapping("/all")
	public List<Ville> getAllCities() {
		return service.findAllCities();
	}
}
