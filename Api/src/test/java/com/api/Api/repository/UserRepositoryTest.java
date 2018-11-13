package com.api.Api.repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.api.Api.models.Utilisateur;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRepositoryTest {

	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	private UserRepository userRepository;
	
	@Test
	public void whenFindByEmail_thenReturnEmployee() {
		
		Utilisateur alex = new Utilisateur("alex@gmail.com");
		entityManager.persist(alex);
		entityManager.flush();
		
		Utilisateur found = userRepository.findByEmail(alex.getEmail());
		
		assertThat(found.getEmail()).isEqualTo(alex.getEmail());
	}
}
