package com.cg.assignment.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

//@Table(name = "Lead")

@Entity
@Data
@NoArgsConstructor

public class Leads {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private int id;
	
	private String firstName;
	private String lastName;
	private String phoneNumber;
	private String email;
	private LocalDate dob;
	private int pincode;
	private String gender;
	private String smoking;
	private String drinking;
	private String address;
	private String dependant;
	private LocalDate annualIncome;
	private int govRebate;
	private int tax;
	private String idProof;
	private String financialProof;

	
	public Leads(int id, String firstName, String lastName, String phoneNumber, String email, LocalDate dob, int pincode,
			String gender, String smoking, String drinking, String address, String dependant, LocalDate annualIncome,
			int govRebate, int tax, String idProof, String financialProof) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.dob = dob;
		this.pincode = pincode;
		this.gender = gender;
		this.smoking = smoking;
		this.drinking = drinking;
		this.address = address;
		this.dependant = dependant;
		this.annualIncome = annualIncome;
		this.govRebate = govRebate;
		this.tax = tax;
		this.idProof = idProof;
		this.financialProof = financialProof;
	}
	
}
