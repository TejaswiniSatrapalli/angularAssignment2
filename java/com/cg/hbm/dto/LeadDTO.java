package com.cg.hbm.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class LeadDTO {
	
	private int id;
	
	private String firstname;
	private String lastname;
	private String lastcontacted;
	private String product;
	private String email;
	private String contact;
	private String leadStage;
	

}
