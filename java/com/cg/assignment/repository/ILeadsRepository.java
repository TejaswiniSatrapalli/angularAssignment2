package com.cg.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



import com.cg.assignment.entity.Leads;

@Repository

public interface ILeadsRepository extends JpaRepository<Leads, Integer>{
}
