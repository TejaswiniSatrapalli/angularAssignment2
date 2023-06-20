package com.cg.hbm.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

//@Table(name = "Lead")

@Entity
@Data
@NoArgsConstructor

public class Lead {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int leadId;
	private String firstname;
	private String lastname;
	private String lastcontacted;
	private String product;
	private String email;
	private String contact;
	private String leadStage;
	private String gender;
	private boolean alcoholConsumption;
	private boolean smokingConsumption;
	
	
	public Lead( String firstname, String lastname, String gender, String product, String email, String contact,
			String leadStage, String lastcontacted, boolean alcoholConsumption, boolean smokingConsumption) {
		super();
		
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.product = product;
		this.email = email;
		this.contact = contact;
		this.leadStage = leadStage;
		this.lastcontacted = lastcontacted;
		this.alcoholConsumption = alcoholConsumption;
		this.smokingConsumption = smokingConsumption;
	}
	
	
}
	  

