package com.api.Api.controller;

import java.security.Principal;
import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.api.Api.models.Utilisateur;
import com.api.Api.security.JwtTokenProvider;
import com.api.Api.services.UsersServices;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UsersController {

	@Autowired
	private UsersServices services;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;


	@Autowired
	private JwtTokenProvider tokenProvider;

	private int phone;
	
	@RequestMapping(value="/userIsAuthenticated",method=RequestMethod.GET)
	public boolean user(Principal principal) {
	if(principal!=null) {	
		   return true;
	   }else {
		  return false;
	    }
	}
	
	
	/** Sign up **/
	@RequestMapping(value = "/registration", method = RequestMethod.POST)
	public Utilisateur registration(@RequestBody Utilisateur utilisateur) {
		// Crypter le mot de passe
		//utilisateur.setPassword(bCryptPasswordEncoder.encode(utilisateur.getPassword()));
		try {
			return services.registration(utilisateur);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	/** Log in **/
	// by email and password
	@RequestMapping(value = "/sign-in", method = RequestMethod.POST)
	public String loginByEmail(@Valid @RequestBody Utilisateur user) {

		
		
		Utilisateur user_login = services.findByEmailOrPhone(user.getEmail(),user.getPhone());
		
		if (bCryptPasswordEncoder.matches(user.getPassword(), user_login.getPassword())) {
			String jwt = tokenProvider.genrateToken(user_login);
			services.setToken(jwt, user_login);
			return jwt;

		} else {
			return "error";
		}

	}

	// by phone number and password
	@RequestMapping(value = "/log-in/{phone}/{password}", method = RequestMethod.GET)
	public Utilisateur loginByPhone(@PathVariable("email") String phone, @PathVariable("password") String password) {

		return null;
	}

	/** Log out **/
	@RequestMapping(value = "/log-out", method = RequestMethod.GET)
	public void logout(@RequestBody Utilisateur utilisateur) {

	}

	@RequestMapping(value = "/sign-up/email/{email}", method = RequestMethod.GET)
	public boolean checkEmail(@PathVariable("email") String email) {
		return services.emailExists(email);
	}

	public boolean checkPhone(@PathVariable("phone") String phone) {
		Long tel = Long.parseLong(phone);
		return services.phoneExists(tel);
	}

	@GetMapping("/all")
	public List<Utilisateur> getAllUsers(){
		return services.findAllUsers();
	}
	
	@GetMapping("/userByEmail/{email}")
	public Utilisateur findByEmail(@PathVariable("email")String email) {
		return services.findByEmail(email);
	}
	@PostMapping("/newToken/{token}")
	public int setToken(@PathVariable("token")String newToken,@RequestBody Utilisateur user) {
		return services.setToken(newToken, user);
	}
	@GetMapping("/user/{email}/{token}")
	public Utilisateur getUserByEmailAndToken(@PathVariable("email")String email,@PathVariable("token")String token) {
		return services.findByEmailAndToken(email, token);
	}
	
}
