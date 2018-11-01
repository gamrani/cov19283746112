package com.api.Api.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.api.Api.models.Utilisateur;
import com.auth0.jwt.JWT;
import static com.auth0.jwt.algorithms.Algorithm.HMAC512;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
  
	@Autowired
	private AuthenticationManager authenticationManager;

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		
		try {
			
			// get user credentials from request
			Utilisateur userCredentials = new ObjectMapper().readValue(request.getInputStream(), Utilisateur.class);
			
			// pass the userCredentials to our authenticationManager
			UsernamePasswordAuthenticationToken userToAuthenticate = new UsernamePasswordAuthenticationToken(
					userCredentials.getEmail(),
					userCredentials.getPassword(),
					new ArrayList<>()
					);
			
			return authenticationManager.authenticate(userToAuthenticate);
		
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	// create JWT when user is authenticated successfuly
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		
		String token = JWT.create()
				.withSubject(((Utilisateur)authResult.getPrincipal()).getEmail())
				.withExpiresAt(new Date(System.currentTimeMillis() + SecurityConstants.EXPIRATION_TIME))
				.sign(HMAC512(SecurityConstants.SECRET.getBytes()));
		
		response.addHeader(SecurityConstants.HEADER_STRING, SecurityConstants.TOKEN_PREFIX + token);
	}
	
}
