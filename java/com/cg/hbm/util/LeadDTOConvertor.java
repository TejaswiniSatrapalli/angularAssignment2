package com.cg.hbm.util;

import org.springframework.stereotype.Component;

import com.cg.hbm.dto.LeadDTO;
import com.cg.hbm.dto.LeadResponseDTO;

import com.cg.hbm.entity.Lead;

@Component

public class LeadDTOConvertor {
	
	public LeadResponseDTO getLeadResponseDTO(Lead lead) {
		
		LeadResponseDTO dto = new LeadResponseDTO();
		
		dto.setLeadId(lead.getLeadId());
		dto.setFirstname(lead.getFirstname());
		dto.setLastname(lead.getLastname());
		dto.setLastcontacted(lead.getLastcontacted());
		dto.setProduct(lead.getProduct());
		dto.setEmail(lead.getEmail());
		dto.setContact(lead.getContact());
		dto.setLeadStage(lead.getLeadStage());
		
		dto.setMsg("review saved");
		return dto;
		
				
		
	}
	
	public LeadDTO getLeadDTO(Lead l) {
		
		LeadDTO obj = new LeadDTO(l.getLeadId(),l.getFirstname(),l.getLastname(),l.getLastcontacted(),l.getProduct(),l.getEmail(),l.getContact(),l.getLeadStage());
		
		return obj;
		
	}
	

}
