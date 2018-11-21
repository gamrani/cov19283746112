package com.api.Api.services;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.api.Api.models.Trip;
import com.api.Api.models.Ville;
import com.fasterxml.jackson.core.JsonProcessingException;

@Service
public interface TripServices {
	public Trip setTrip(Trip trip) throws JsonProcessingException;
	public List<Trip> getAllTrips();
	public List<Trip> getTrips(String cityDepart, String cityDestionation,String dateDepart);
	public List<Trip> getTripsByCities(String cityDepart, String cityDestionation);
    
}
