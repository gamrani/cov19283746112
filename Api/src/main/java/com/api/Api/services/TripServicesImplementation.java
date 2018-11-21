package com.api.Api.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.Api.models.Trip;
import com.api.Api.models.Utilisateur;
import com.api.Api.models.Ville;
import com.api.Api.repository.CitiesRepository;
import com.api.Api.repository.TripRepository;
import com.api.Api.repository.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class TripServicesImplementation implements TripServices {

	@Autowired
	private TripRepository dao;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CitiesRepository cityRepository;
	
	public Trip setTrip(Trip trip) throws JsonProcessingException {
	try {
		Utilisateur user = userRepository.findByEmail(trip.getCreateur().getEmail());
        trip.setCreateur(user);	
        
        Ville city_depart = cityRepository.findByVille(trip.getCityDepart().getVille());
        trip.setCityDepart(city_depart);
        
        Ville city_destination = cityRepository.findByVille(trip.getCityDestination().getVille());
        trip.setCityDestination(city_destination);
        
       if(trip.getEscale()!=null) { 
    	   Ville escale = cityRepository.findByVille(trip.getEscale().getVille());
        trip.setEscale(escale);
        }
       
		return dao.save(trip);
	}catch(Exception e) {
		System.out.println("Service error : "+e);
		return null;
	}
		
		
	}
	
	public List<Trip> getAllTrips() {
		return dao.findAll();
	}

	@Override
	public List<Trip> getTrips(String cityDepart, String cityDestionation, String dateDepart) {
		// TODO Auto-generated method stub
		try {
			Ville depart = cityRepository.findByVille(cityDepart);
			Ville destionation = cityRepository.findByVille(cityDestionation);
			return dao.getTrips(depart, destionation, dateDepart);
		}catch(Exception e) {
			System.out.println("error get trips by cities and date : "+e.getMessage());
			return null;
		}	
	}

	@Override
	public List<Trip> getTripsByCities(String cityDepart, String cityDestionation) {
		try {
			Ville depart = cityRepository.findByVille(cityDepart);
			Ville destination = cityRepository.findByVille(cityDestionation);
			return dao.getTripsUsingCities(depart, destination);
		}catch(Exception e) {
			System.out.println("error get trips by cities and date : "+e.getMessage());
			return null;
		}	
	}
	
	
}
