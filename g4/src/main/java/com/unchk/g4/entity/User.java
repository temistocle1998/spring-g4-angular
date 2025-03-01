package com.unchk.g4.entity;

import java.util.Date;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.Transient;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String telephone;

    @Column(nullable = false)
    private String adresse;

    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String role;
    
    @Transient
    private PasswordEncoder passwordEncoder; // Pour encoder le mot de passe

	@Column(name = "join_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date joinDate;

    @Column(nullable = true)
    private Float rating;

    @OneToMany(mappedBy = "proprietaire", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore // Ignore cette propriété lors de la sérialisation JSON
    private List<Item> itemsPerdus;

    @OneToMany(mappedBy = "finder", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore // Ignore cette propriété lors de la sérialisation JSON

    private List<Item> itemsTrouves;

    @OneToMany(mappedBy = "destinataire", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Notification> notifications;
    
    
 // Callback pour encoder le mot de passe avant la persistance
    @PrePersist
    @PreUpdate
    public void encodePassword() {
        if (this.password != null && this.passwordEncoder != null) {
            this.password = this.passwordEncoder.encode(this.password);
        }
    }

    public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
    

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getJoinDate() {
		return joinDate;
	}

	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}

	public Float getRating() {
		return rating;
	}

	public void setRating(Float rating) {
		this.rating = rating;
	}

	public List<Item> getItemsPerdus() {
		return itemsPerdus;
	}

	public void setItemsPerdus(List<Item> itemsPerdus) {
		this.itemsPerdus = itemsPerdus;
	}

	public List<Item> getItemsTrouves() {
		return itemsTrouves;
	}

	public void setItemsTrouves(List<Item> itemsTrouves) {
		this.itemsTrouves = itemsTrouves;
	}

	public List<Notification> getNotifications() {
		return notifications;
	}

	public void setNotifications(List<Notification> notifications) {
		this.notifications = notifications;
	}

	public Long getId() {
		return id;
	}
    
	public PasswordEncoder getPasswordEncoder() {
        return passwordEncoder;
    }

    public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }
}
