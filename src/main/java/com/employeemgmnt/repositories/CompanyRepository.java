package com.employeemgmnt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeemgmnt.dtos.CompanyDTO;
import com.employeemgmnt.entities.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer> {

}