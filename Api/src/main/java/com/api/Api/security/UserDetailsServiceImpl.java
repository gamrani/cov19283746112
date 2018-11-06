package com.api.Api.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

import java.util.Optional;

import javax.transaction.Transactional;

import com.api.Api.models.Utilisateur;
import com.api.Api.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String emailOrPhone) throws UsernameNotFoundException {
		Utilisateur utilisateur = userRepository.findByEmailOrPhone(emailOrPhone, Long.parseLong(emailOrPhone));
		
		if(utilisateur == null) {
			throw new UsernameNotFoundException(emailOrPhone);
		}
		
      return UserPrincipal.create(utilisateur);
	}
	
	public UserDetails loadUserById(Long id) {
		Utilisateur user =  userRepository.findOneById(id);
		if(user == null) {
			throw new UsernameNotFoundException("User not found with id :"+id.toString());
		}
		
		return UserPrincipal.create(user);
	}

}
