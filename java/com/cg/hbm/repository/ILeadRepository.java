package com.cg.hbm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.hbm.entity.Lead;

@Repository


public interface ILeadRepository extends JpaRepository<Lead,Integer>{
	

//List<Review> getReviewByStarRating(int starRating);	
	


}
