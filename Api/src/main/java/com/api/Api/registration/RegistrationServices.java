package com.api.Api.registration;

import org.springframework.stereotype.Service;

import com.api.Api.models.Utilisateur;

@Service
public interface RegistrationServices {

	public Utilisateur registration(Utilisateur utilisateur);
	public boolean emailExists(String email);
	public boolean phoneExists(Long phone);
	public void save(Utilisateur user);
}
