package com.api.Api.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.api.Api.models.Trip;
import com.api.Api.models.Ville;

@Repository
public interface TripRepository extends JpaRepository<Trip, Long> {

	public Trip findByCityDepart(Ville city);
	public Trip findByCityDestination(Ville city);
	public Trip findByDateDepart(Date date);
	@Transactional
	@Query("select t FROM Trip t WHERE t.cityDepart = :cityDepart AND t.cityDestination = :cityDestionation AND t.shortDateDepart = :dateDepart")
	public List<Trip> getTrips(@Param("cityDepart") Ville cityDepart, @Param("cityDestionation") Ville cityDestionation, @Param("dateDepart")String dateDepart);
	@Transactional
	@Query("select t FROM Trip t WHERE t.cityDepart = :cityDepart AND t.cityDestination = :cityDestionation")
	public List<Trip> getTripsUsingCities(@Param("cityDepart") Ville cityDepart, @Param("cityDestionation") Ville cityDestionation);
}
