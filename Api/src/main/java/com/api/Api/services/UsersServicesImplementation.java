package com.api.Api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.api.Api.models.Utilisateur;
import com.api.Api.repository.UserRepository;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@Component
public class UsersServicesImplementation implements UsersServices {

	@Autowired
	private UserRepository dao;
	
	/** Sign up **/
	@Override
	public Utilisateur registration(Utilisateur utilisateur) throws Exception {
	
		
		if(emailExists(utilisateur.getEmail()) || phoneExists(utilisateur.getPhone())) {
			System.out.println("null phone or email");
			return null;
		}else {
			System.out.println("registration");
			return dao.save(utilisateur);
		}
		
	}
	
	/** Log in **/
	@Override
	public boolean Login(Utilisateur user) {
		return false;
	}
	

   
	@Override
	public boolean emailExists(String email) {
        boolean r = false;
		if(email!=null) {
			if(dao.findByEmail(email)!=null && email!=null) {
				r = true;
			}
		}
        
		return r;
	}


	@Override
	public boolean phoneExists(Long phone) {
		 boolean r = false;
		 if(phone!=null) {
			 if(dao.findByPhone(phone)!=null) {
					r = true;
				}
		 }
			
			return r;
	}

	@Override
	public Utilisateur findByEmailOrPhone(String email, Long phone) {
		// TODO Auto-generated method stub
		return dao.findByEmailOrPhone(email, phone);
	}

	@Override
	public Utilisateur findById(Long id) {
		// TODO Auto-generated method stub
		return dao.findOneById(id);
	}

	@Override
	public Utilisateur findByEmail(String email) {
		// TODO Auto-generated method stub
		Utilisateur u = dao.findByEmail(email);
		if(u!=null) {
			return u;
		}else {
			return null;
			
		}
	}

	@Override
	public int setToken(String token, Utilisateur user) {
		// TODO Auto-generated method stub
		Utilisateur u = dao.findByEmail(user.getEmail());
		if(dao.findByEmail(user.getEmail())!=null) {
			return dao.setToken(token, u.getId());
		}else {
			dao.save(user);
			return dao.setToken(token, user.getId());
		}
		
		
	}

	
	public List<Utilisateur> findAllUsers(){
	   return dao.findAll();
	}

	@Override
	public Utilisateur findByEmailAndToken(String email, String token) {
		// TODO Auto-generated method stub
		return dao.findByEmailAndToken(email, token);
	}

	


	
}
