package com.cg.assignment.controller;

import java.util.ArrayList;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.assignment.dto.LeadsDTO;

import com.cg.assignment.dto.LeadsResponseDTO;
import com.cg.assignment.entity.Leads;
import com.cg.assignment.service.ILeadsService;
import com.cg.assignment.util.LeadsDTOConvertor;


@RestController
@RequestMapping("/leads")
@CrossOrigin(origins = {"http://localhost:4200/","http://localhost:9090/"},allowedHeaders = "*")

public class LeadsController {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private ILeadsService leadsService;
	
	@Autowired
	private LeadsDTOConvertor leadsDTOConvertor;

	
	public LeadsController() {

		System.err.println("-------------------------LeadsController Controller Called--------------------------");
	}
	
	@PostMapping("/add")
	public ResponseEntity<LeadsResponseDTO> addLead(@RequestBody Leads leads) {
		 Leads savedLead = leadsService.addLead(leads);

			logger.info("---->> Lead saved"+savedLead);
			
			
			if(savedLead != null) {

				LeadsResponseDTO dtoObj = leadsDTOConvertor.getLeadsResponseDTO(savedLead);
			return new ResponseEntity<LeadsResponseDTO>(dtoObj,HttpStatus.OK);
		}
			return null;
				
		}
	
//	@PostMapping("/add2")
//	public ResponseEntity<LeadsResponseDTO> addLeadStep2(@RequestBody LeadsDTO2 leadsDTO) {
//		 Leads savedLead = leadsService.addLeadStage2(leadsDTO);
//
//			logger.info("---->> Lead saved"+savedLead);
//			
//			
//			if(savedLead != null) {
//
//				LeadsResponseDTO dtoObj = leadsDTOConvertor.getLeadsResponseDTO(savedLead);
//			return new ResponseEntity<LeadsResponseDTO>(dtoObj,HttpStatus.OK);
//		}
//			return null;
//				
//		}
//

	
	@GetMapping("/all")
	public ResponseEntity<List<LeadsResponseDTO>> getAllLeads()
	{
		List<Leads> allLeads = leadsService.getAllLeads();
		
		List<LeadsResponseDTO> allLeadsDTO = new ArrayList<>();
		
		for (Leads leads : allLeads) {
			
			allLeadsDTO.add(leadsDTOConvertor.getLeadsResponseDTO(leads));		
		}
		return new ResponseEntity<List<LeadsResponseDTO>>(allLeadsDTO,HttpStatus.OK);
	}

}

