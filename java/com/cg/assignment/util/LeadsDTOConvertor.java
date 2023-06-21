package com.cg.assignment.util;



import org.springframework.stereotype.Component;

import com.cg.assignment.dto.LeadsDTO;
import com.cg.assignment.dto.LeadsResponseDTO;
import com.cg.assignment.entity.Leads;




@Component
public class LeadsDTOConvertor {
	
public LeadsResponseDTO getLeadsResponseDTO(Leads leads) {
		
		LeadsResponseDTO dto = new LeadsResponseDTO();
	
		dto.setId(leads.getId());
		dto.setFirstName(leads.getFirstName());
		dto.setLastName(leads.getLastName());
	    dto.setPhoneNumber(leads.getPhoneNumber());
	    dto.setEmail(leads.getEmail());
		dto.setDob(leads.getDob());
		dto.setPincode(leads.getPincode());
		dto.setGender(leads.getGender());
		dto.setSmoking(leads.getSmoking());
		dto.setDrinking(leads.getDrinking());
		dto.setAddress(leads.getAddress());
		dto.setDependant(leads.getDependant());
		dto.setAnnualIncome(leads.getAnnualIncome());
		dto.setGovRebate(leads.getGovRebate());
		dto.setTax(leads.getTax());
		dto.setIdProof(leads.getIdProof());
		dto.setFinancialProof(leads.getFinancialProof());


		dto.setMsg("Lead Saved");
		return dto;
	}
	
public LeadsDTO getLeadsDTO(Leads l) {
	
	LeadsDTO obj = new LeadsDTO(l.getId(),l.getFirstName(),l.getLastName(),l.getPhoneNumber(),l.getEmail(),l.getDob(),l.getPincode(),l.getGender(),l.getSmoking(),l.getDrinking(),
			       l.getAddress(),l.getDependant(),l.getAnnualIncome(),l.getGovRebate(),l.getTax(),l.getIdProof(),l.getFinancialProof());
	
	return obj;
	
}


}
