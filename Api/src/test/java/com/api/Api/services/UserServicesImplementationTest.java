package com.api.Api.services;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import com.api.Api.models.Utilisateur;
import com.api.Api.repository.UserRepository;

@RunWith(SpringRunner.class)
public class UserServicesImplementationTest {
  
	@TestConfiguration
	static class UsersServicesTestContextConfiguration{
		@Bean
	    public UsersServices usersServices() {
	        return new UsersServicesImplementation();
	    }
	}
	
	
	
	@Autowired
	private UsersServices userServices;
	
	@MockBean
	private UserRepository userRepository;
	
	@Before
	public void setUp() {
		Utilisateur alex = new Utilisateur("alex@gmail.com");
		Mockito.when(userRepository.findByEmail(alex.getEmail())).thenReturn(alex);
	}
	@Test
	public void whenValidEmail_thenUserShouldBeFound() {
		String email = "alex@gmail.com";
		Utilisateur found = userServices.findByEmail(email);
		
		assertThat(found.getEmail()).isEqualTo(email);
	}
	
}
