package com.api.Api.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;
import com.api.Api.models.Utilisateur;
import com.api.Api.registration.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Utilisateur utilisateur = userRepository.findByEmail(email);
		
		if(utilisateur == null) {
			throw new UsernameNotFoundException(email);
		}
		return  new User(utilisateur.getEmail(),utilisateur.getPassword(),emptyList());
	}

}
