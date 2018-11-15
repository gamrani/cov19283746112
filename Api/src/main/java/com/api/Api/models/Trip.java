package com.api.Api.models;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "trip")
public class Trip implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name="date_depart")
	private Date dateDepart;
	
	@Column(name="number_of_places")
	private int places;
	
	@Column(name="type_voyage")
	private String typeVoyage;
	
	@Column(name="type_route")
	private String typeRoute;
	
	@Column(name="date_arrivee")
	private Date dateArrivee;
	
	@Column
	private String commentaire;

	@Column
	private Long prix;

	@OneToMany
	private List<Utilisateur> adherents;

	@OneToOne
	private Utilisateur createur;

	@OneToOne
	private Ville cityDepart;

	@OneToOne
	private Ville cityDestination;

	@OneToOne
	private Ville escale;

	public Trip(Long id, List<Utilisateur> adherents, Utilisateur createur, Ville cityDepart,
			Ville cityDestination, Ville escale, String commentaire, Long prix) {
		super();
		this.id = id;
		this.adherents = adherents;
		this.createur = createur;
		this.cityDepart = cityDepart;
		this.cityDestination = cityDestination;
		this.escale = escale;
		this.commentaire = commentaire;
		this.prix = prix;
	}

	public Trip() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Collection<Utilisateur> getAdherents() {
		return adherents;
	}

	public void setAdherents(List<Utilisateur> adherents) {
		this.adherents = adherents;
	}

	public Utilisateur getCreateur() {
		return createur;
	}

	public void setCreateur(Utilisateur createur) {
		this.createur = createur;
	}

	public Ville getCityDepart() {
		return cityDepart;
	}

	public void setCityDepart(Ville cityDepart) {
		this.cityDepart = cityDepart;
	}

	public Ville getCityDestination() {
		return cityDestination;
	}

	public void setCityDestination(Ville cityDestination) {
		this.cityDestination = cityDestination;
	}

	public String getCommentaire() {
		return commentaire;
	}

	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}

	public Long getPrix() {
		return prix;
	}

	public void setPrix(Long prix) {
		this.prix = prix;
	}

	public Date getDateDepart() {
		return dateDepart;
	}

	public void setDateDepart(Date dateDepart) {
		this.dateDepart = dateDepart;
	}

	public int getPlaces() {
		return places;
	}

	public void setPlaces(int places) {
		this.places = places;
	}

	public String getTypeVoyage() {
		return typeVoyage;
	}

	public void setTypeVoyage(String typeVoyage) {
		this.typeVoyage = typeVoyage;
	}

	public String getTypeRoute() {
		return typeRoute;
	}

	public void setTypeRoute(String typeRoute) {
		this.typeRoute = typeRoute;
	}

	public Date getDateArrivee() {
		return dateArrivee;
	}

	public void setDateArrivee(Date dateArrivee) {
		this.dateArrivee = dateArrivee;
	}

	public Ville getEscale() {
		return escale;
	}

	public void setEscale(Ville escale) {
		this.escale = escale;
	}
	

}
