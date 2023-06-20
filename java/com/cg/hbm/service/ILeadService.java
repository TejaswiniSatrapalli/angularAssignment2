package com.cg.hbm.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.hbm.entity.Lead;

@Service

public interface ILeadService {

	
	 public  List<Lead> getAllLeads();
	    
	    public Lead addLead(Lead lead) throws Exception;
	 	

}
