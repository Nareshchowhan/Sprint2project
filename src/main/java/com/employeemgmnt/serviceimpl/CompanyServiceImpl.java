package com.employeemgmnt.serviceimpl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employeemgmnt.dtos.CompanyDTO;
import com.employeemgmnt.entities.Company;
import com.employeemgmnt.repositories.CompanyRepository;
import com.employeemgmnt.service.CompanyService;
@Service
public class CompanyServiceImpl implements CompanyService {
	@Autowired
	CompanyRepository companyRepository;

	@Override
	public Company saveCompany(CompanyDTO companyDTO) {
		Company company=Company.builder()
				.id(companyDTO.getId())
				.name(companyDTO.getName())
				.location(companyDTO.getLocation())
				.pincode(companyDTO.getPincode())
			
				.build();
		return companyRepository.save(company);
	}

	@Override
	public String updateCompany(CompanyDTO params, Integer Id) {
		Company company = companyRepository.findById(Id).get();
		company.setName(params.getName());
		company.setLocation(params.getLocation());
		company.setPincode(params.getPincode());
		companyRepository.save(company);
		return "Company Details are updated Successfully";
	}

	@Override
	public Company getCompanyById(Integer Id) {
		return companyRepository.findById(Id).get();
	}

	@Override
	public String deleteCompanyById(Integer Id) {
		companyRepository.deleteById(Id);
		return "Company details with id " + Id + " is deleted successfully";
	}

	@Override
	public List<Company> displayAll() {
		return companyRepository.findAll();
	}

	@Override
	public String deleteAllCompanies() {
		companyRepository.deleteAll();
		return "All companies details are deleted successfully";
	}

}



