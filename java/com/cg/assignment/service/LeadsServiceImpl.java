package com.cg.assignment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.assignment.entity.Leads;
import com.cg.assignment.repository.ILeadsRepository;

@Service
public class LeadsServiceImpl implements ILeadsService{
	
	@Autowired
	ILeadsRepository leadsRepository;

	@Override
	public Leads addLead(Leads leads){

		return leadsRepository.save(leads);
	}
	
	
	
//	@Override
//	public Leads addLeadStage2(LeadsDTO2 leadsDTO2){
//
//			return leadsRepository.save(leadsDTO2);
//	}
//	
	
	

	@Override
	public List<Leads> getAllLeads() {
		// TODO Auto-generated method stub
		return leadsRepository.findAll();
	}

}
