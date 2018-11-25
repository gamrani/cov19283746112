package com.api.Api.models;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;


@Entity
@Table(name = "user")
public class Utilisateur implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column
	private String email;

	@Column
	private String firstName;

	@Column
	private String lastName;

	@Column
	private Long phone;

	@Column
	private String password;

	@Column
	private String birthday;

	@Column
	private String name;
	
	@Column
	private String sexe;
	
	@Column
	private String token;
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "user_roles",
	           joinColumns = @JoinColumn(name="user_id"),
	           inverseJoinColumns = @JoinColumn(name="role_id")
			  )
	private Set<Role> roles = new HashSet<>();

	public Utilisateur() {
		super();
	}

	public Utilisateur(String email, String firstName, String lastName, Long phone, String password, String birthday,
			String sexe) {
		super();
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.password = password;
		this.birthday = birthday;
		this.sexe = sexe;
	}
	
	public Utilisateur(String string) {
		// TODO Auto-generated constructor stub
	}
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public String getSexe() {
		return sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

}
