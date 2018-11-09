package com.api.Api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.Api.models.Trip;
import com.api.Api.repository.TripRepository;

@Service
public class TripServices {

	@Autowired
	private TripRepository dao;
	
	
	public Trip setTrip(Trip trip) {
		return dao.save(trip);
	}
	
	public List<Trip> getAllTrips() {
		return dao.findAll();
	}
	
	
}
