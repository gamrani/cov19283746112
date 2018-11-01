package com.api.Api.registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.api.Api.models.Utilisateur;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@Component
public class RegistrationServicesImplementation implements RegistrationServices {

	@Autowired
	private UserRepository dao;
	
	
	@Override
	public Utilisateur registration(Utilisateur utilisateur) {
	
		if(emailExists(utilisateur.getEmail()) || phoneExists(utilisateur.getPhone())) {
			return null;
		}else {
			return dao.save(utilisateur);
		}
		
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
	public void save(Utilisateur user) {
      dao.save(user);		
	}

	

}
