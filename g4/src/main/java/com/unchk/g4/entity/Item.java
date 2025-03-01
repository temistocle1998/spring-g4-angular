package com.unchk.g4.entity;

import jakarta.persistence.*;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Entity
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String location;

    @Column(name = "date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date date;

    @Column(nullable = true)
    private String image;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String status; // Ex: "En attente", "Trouvé", "Rendu"

    @ManyToOne
    @JoinColumn(name = "finder_id", nullable = true)
    private User finder;

    @ManyToOne
    @JoinColumn(name = "proprietaire_id", nullable = true)
    private User proprietaire;

    @ElementCollection
    @CollectionTable(name = "item_additional_details", joinColumns = @JoinColumn(name = "item_id"))
    @MapKeyColumn(name = "detail_key")
    @Column(name = "detail_value")
    private Map<String, String> additionalDetails = new HashMap<>();

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public User getFinder() {
		return finder;
	}

	public void setFinder(User finder) {
		this.finder = finder;
	}

	public User getProprietaire() {
		return proprietaire;
	}

	public void setProprietaire(User proprietaire) {
		this.proprietaire = proprietaire;
	}

	public Map<String, String> getAdditionalDetails() {
		return additionalDetails;
	}

	public void setAdditionalDetails(Map<String, String> additionalDetails) {
		this.additionalDetails = additionalDetails;
	}

	public Long getId() {
		return id;
	}

    
}