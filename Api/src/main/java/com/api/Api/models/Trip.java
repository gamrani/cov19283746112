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
	
	@Column(name="date_arrivee")
	private Date dateArrivee;
	
	@Column
	private String commentaire;

	@Column
	private Long prix;

	@OneToMany
	private List<Utilisateur> adherents;

	@OneToOne(fetch = FetchType.EAGER)
	private Utilisateur createur;

	@OneToOne(fetch = FetchType.EAGER)
	private Ville cityDepart;

	@OneToOne(fetch = FetchType.EAGER)
	private Ville cityDestination;

	@OneToMany
	private Collection<Ville> esclaes;

	public Trip(Long id, List<Utilisateur> adherents, Utilisateur createur, Ville cityDepart,
			Ville cityDestination, Collection<Ville> esclaes, String commentaire, Long prix) {
		super();
		this.id = id;
		this.adherents = adherents;
		this.createur = createur;
		this.cityDepart = cityDepart;
		this.cityDestination = cityDestination;
		this.esclaes = esclaes;
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

	public Collection<Ville> getEsclaes() {
		return esclaes;
	}

	public void setEsclaes(Collection<Ville> esclaes) {
		this.esclaes = esclaes;
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

}
