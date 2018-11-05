package com.api.Api.security;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.api.Api.models.Utilisateur;

import io.jsonwebtoken.*;

@Component
public class JwtTokenProvider {

	private static final Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);
	
	@Value("${app.jwtSecret}")
	private String jwtSecret;
	@Value("${app.jwtExpirationInMs}")
	private int jwtExpirationInMs;
	
	/** Generation du token JWT **/
	public String genrateToken(Utilisateur user) {
		
		Date now = new Date();
		Date expiryDay = new Date(now.getTime()+jwtExpirationInMs);
		System.out.println("user_id : "+user.getId());
		return Jwts.builder()
				.setSubject(Long.toString(user.getId()))
				.setIssuedAt(new Date())
				.setExpiration(expiryDay)
				.signWith(SignatureAlgorithm.HS512, jwtSecret)
				.compact();
	}
	
	
	/** Recuperation de l'utilisateur id à partir d'un token **/
	public Long getUserIdFromJWT(String token) {
	   
		Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();	
		return Long.parseLong(claims.getSubject());
	
	}
	
	/** Validation d'un token **/
	public boolean validateToken(String authToken) {
		try {
			
			Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
			return true;
			
		}catch(SignatureException ex) {
			logger.error("Invalid JWT signature");
		}catch(MalformedJwtException ex) {
			logger.error("Invalid JWT token");
		}catch(ExpiredJwtException ex) {
			logger.error("Expired JWT Token");
		}catch(UnsupportedJwtException ex) {
			logger.error("Unsupported JWT Token");
		}catch(IllegalArgumentException ex) {
			logger.error("JWT claims string is empty");
		}
		
		return false;
	}
	

}
