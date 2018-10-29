package com.api.Api.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.api.Api.models.User;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	AuthServices services;
	
	@RequestMapping(value="/registration",method=RequestMethod.POST)
	public User registration(@RequestBody User user) {
		return services.registration(user);
		
	}
}
