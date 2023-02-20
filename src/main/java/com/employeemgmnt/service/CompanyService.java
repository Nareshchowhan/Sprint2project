package com.employeemgmnt.service;

import java.util.List;

import com.employeemgmnt.dtos.CompanyDTO;
import com.employeemgmnt.entities.Company;

public interface CompanyService {

	 
	Company saveCompany(CompanyDTO companyDTO);   //save company details
	
    public String updateCompany(CompanyDTO params,Integer Id);  //update company details
    
	Company getCompanyById(Integer Id);   //get company details
	
	public String deleteCompanyById(Integer Id);  //delete company
	
	public List<Company> displayAll();  //list of companies
	
	public String deleteAllCompanies(); //deleting all companies
	
}

