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
		System.out.println("registration service");
		User user_from_db = dao.findByEmail(user.getEmail());
		System.out.println(user_from_db);
		if(user_from_db==null) {
			return null;
		}else {
			return dao.save(user);
		}
		
	}

}
