package com.cg.assignment.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.assignment.entity.Leads;

@Service
public interface ILeadsService {
	
	public Leads addLead(Leads leads);

	public List<Leads> getAllLeads();

//	Leads addLeadStage1(LeadsDTO leadsDTO);

}
