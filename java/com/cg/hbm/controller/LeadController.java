package com.cg.hbm.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.hbm.dto.LeadResponseDTO;
import com.cg.hbm.entity.Lead;
import com.cg.hbm.service.LeadServiceIMPL;
import com.cg.hbm.util.LeadDTOConvertor;


@RestController
@RequestMapping("/lead")

@CrossOrigin(origins = {"http://localhost:4200/","http://localhost:2020/"},allowedHeaders = "*")


public class LeadController {
	
private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	LeadServiceIMPL leadService;
	
	@Autowired
	LeadDTOConvertor leadDTOConvertor;

	public LeadController() {
		
	logger.info("---Lead Controller Called --");
	logger.warn("---Lead Controller Called --");
	
	System.err.println("Lead Controller Called");
    }
	
	@PostMapping("/addLead")
	public ResponseEntity<LeadResponseDTO> addReview(@RequestBody Lead lead) throws Exception
	{
		Lead savedLead = leadService.addLead(lead);
		
		logger.info("---->> Lead saved"+savedLead);
		
		
		if(savedLead != null) {

			LeadResponseDTO dtoObj = leadDTOConvertor.getLeadResponseDTO(savedLead);
		return new ResponseEntity<LeadResponseDTO>(dtoObj,HttpStatus.OK);
	}
		return null;
			
	}
	
	
	@GetMapping("/allLeads")
	public ResponseEntity<List<LeadResponseDTO>> getAllLeads()
	{
		List<Lead> allLeads = leadService.getAllLeads();
		
		List<LeadResponseDTO> allLeadDTO = new ArrayList<>();
		
		for (Lead lead : allLeads) {
			
			allLeadDTO.add(leadDTOConvertor.getLeadResponseDTO(lead));		
		}
		return new ResponseEntity<List<LeadResponseDTO>>(allLeadDTO,HttpStatus.OK);
	}

}
