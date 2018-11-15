package com.api.Api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.Api.models.Trip;
import com.fasterxml.jackson.core.JsonProcessingException;

@Service
public interface TripServices {
	public Trip setTrip(Trip trip) throws JsonProcessingException;
	public List<Trip> getAllTrips();

}
