package com.api.Api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.Api.models.Trip;
import com.api.Api.services.TripServices;
import com.api.Api.services.TripServicesImplementation;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/trip")
@CrossOrigin(origins="*")
public class TripController {

	@Autowired
	private TripServices service;
	
	@PostMapping("/create")
	public Trip createTrip(@RequestBody Trip trip) {
		
		try {
			return service.setTrip(trip);
		} catch (Exception e) {
			System.out.println("controller error :"+e.getMessage());
			return null;
		}
		
	}
	
	@GetMapping("/allTrips")
	public List<Trip> getAllTrips(){
		return service.getAllTrips();
	}
	
}
