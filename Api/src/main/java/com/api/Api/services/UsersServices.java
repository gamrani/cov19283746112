package com.api.Api.services;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import com.api.Api.models.Utilisateur;

@Service
public interface UsersServices {

	public Utilisateur findById(Long id);
	public Utilisateur registration(Utilisateur utilisateur) throws Exception;
	public boolean emailExists(String email);
	public boolean phoneExists(Long phone);
    public boolean Login(Utilisateur user);
    public Utilisateur findByEmailOrPhone(String email, Long phone);
	public Utilisateur findByEmail(String email);
	public int setToken(String token, Utilisateur user);
	public List<Utilisateur> findAllUsers();
	public Utilisateur findByEmailAndToken(String email,String token);
}
