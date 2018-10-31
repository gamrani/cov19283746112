package com.api.Api.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.api.Api.models.User;

@Component
public class AuthServicesImplementation implements AuthServices {

	@Autowired
	AuthDAO dao;
	
	@Override
	public User registration(User user) {
	
		if(emailExists(user.getEmail()) && phoneExists(user.getPhone())) {
			return null;
		}else {
			return dao.save(user);
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

	

}
