package com.api.Api.registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.api.Api.models.Utilisateur;

@RestController
@RequestMapping("/users")
public class RegistrationController {

	@Autowired
	RegistrationServices services;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	private int phone;
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/registration",method=RequestMethod.POST)
	public Utilisateur registration(@RequestBody Utilisateur utilisateur) {
		// Crypter le mot de passe
		utilisateur.setPassword(bCryptPasswordEncoder.encode(utilisateur.getPassword()));
		return services.registration(utilisateur);
	}
	
	@CrossOrigin(origins="*")
	@RequestMapping(value="/sign-up",method=RequestMethod.POST)
	public void signUp(@RequestBody Utilisateur user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        services.save(user);
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
