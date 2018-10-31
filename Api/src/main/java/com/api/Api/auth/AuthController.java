package com.api.Api.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	private int phone;
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/registration",method=RequestMethod.POST)
	public User registration(@RequestBody User user) {
		System.out.println("registration controller");
		return services.registration(user);
	}
	
	@CrossOrigin(origins="*")
	@RequestMapping(value="/registration/email/{email}",method=RequestMethod.GET)
	public boolean checkEmail(@PathVariable("email") String email) {
		return services.emailExists(email);
	}
	
	@CrossOrigin(origins="*")
	@RequestMapping(value="/registration/phone/{phone}",method=RequestMethod.GET)
	public boolean checkPhone(@PathVariable("phone") String phone) {
		Long tel = Long.parseLong(phone);
		return services.phoneExists(tel);
	}
}
