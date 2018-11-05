package com.api.Api.registration;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.api.Api.models.Utilisateur;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@Component
public class RegistrationServicesImplementation implements RegistrationServices {

	@Autowired
	private UserRepository dao;
	
	/** Sign up **/
	@Override
	public Utilisateur registration(Utilisateur utilisateur) {
	
		if(emailExists(utilisateur.getEmail()) || phoneExists(utilisateur.getPhone())) {
			return null;
		}else {
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
		if(dao.findByEmail(email)!=null) {
			r = true;
		}
		return r;
	}


	@Override
	public boolean phoneExists(Long phone) {
		 boolean r = false;
			if(dao.findByPhone(phone)!=null) {
				r = true;
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
		return dao.findByEmail(email);
	}

	@Override
	public int setToken(String token, Long id) {
		// TODO Auto-generated method stub
		return dao.setToken(token, id);
	}

	


	
}
