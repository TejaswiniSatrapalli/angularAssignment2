package com.cg.hbm.dto;

import lombok.Data;

@Data
public class LeadResponseDTO {
	
	
	private int LeadId;
	
	private String firstname;
	private String lastname;
	private String lastcontacted;
	private String product;
	private String email;
	private String contact;
	private String leadStage;
	
	private String msg;

}
