package com.unchk.g4.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "notifications")
public class Notification {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String message;

    @Column(name = "date_envoi", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateEnvoi;

    @Column(nullable = false)
    private boolean estLue;

    @ManyToOne
    @JoinColumn(name = "destinataire_id", nullable = false)
    private User destinataire;

    @ManyToOne
    @JoinColumn(name = "item_id", nullable = false)
    private Item itemConcerne;


    public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getDateEnvoi() {
		return dateEnvoi;
	}

	public void setDateEnvoi(Date dateEnvoi) {
		this.dateEnvoi = dateEnvoi;
	}

	public boolean isEstLue() {
		return estLue;
	}

	public void setEstLue(boolean estLue) {
		this.estLue = estLue;
	}

	public User getDestinataire() {
		return destinataire;
	}

	public void setDestinataire(User destinataire) {
		this.destinataire = destinataire;
	}

	public Item getItemConcerne() {
		return itemConcerne;
	}

	public void setItemConcerne(Item itemConcerne) {
		this.itemConcerne = itemConcerne;
	}

	public Long getId() {
		return id;
	}
}