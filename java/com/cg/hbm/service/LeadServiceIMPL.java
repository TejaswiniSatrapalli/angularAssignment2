package com.cg.hbm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.hbm.dto.LeadResponseDTO;
import com.cg.hbm.entity.Lead;

import com.cg.hbm.repository.ILeadRepository;

@Service

public  class LeadServiceIMPL implements ILeadService{
	
	@Autowired
	ILeadRepository leadRepo;
	
	
	@Override
	 public  List<Lead> getAllLeads() {
		
		return leadRepo.findAll();	
	}

	@Override
	 public Lead addLead(Lead lead) {
	
		return leadRepo.save(lead);
	}
	
}
