package com.employeemgmnt.serviceimpl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employeemgmnt.dtos.EmployeeDTO;
import com.employeemgmnt.entities.Employee;
import com.employeemgmnt.repositories.EmployeeRepository;
import com.employeemgmnt.service.EmployeeService;
@Service
public class EmployeeServiceImpl implements EmployeeService {
	Employee employee;
	@Autowired
	EmployeeRepository employeeRepository;
	@Override
	public Employee saveEmployee(EmployeeDTO employeeDTO) {
		Employee employee=Employee.builder()
				.name(employeeDTO.getName())
				.emailId(employeeDTO.getEmailId())
				.age(employeeDTO.getAge())
				.mobileNo(employeeDTO.getMobileNo())
				.build();
		return employeeRepository.save(employee);
	}
	
	@Override
	public String updateEmployee(Integer Id, EmployeeDTO params) {
		employee=employeeRepository.findById(Id).get();
		employee.setName(params.getName());
		employee.setAge(params.getAge());
		employee.setEmailId(params.getEmailId());
		employee.setMobileNo(params.getMobileNo());
		employeeRepository.save(employee);
		return "Employee details are updated successfully";
	}

	@Override
	public Employee getEmployeeById(Integer Id) {
		
		return employeeRepository.findById(Id).get();
	}
	
	@Override
	public List<Employee>displayAll() {
		
		return employeeRepository.findAll();
	}

	@Override
	public String deleteEmployeeById(Integer Id) {
		
		 employeeRepository.deleteById(Id); 
		 return "The Employee details deleted by Id:"+Id;
	}

	@Override
	public String deleteAllEmployee() {
		employeeRepository.deleteAll();
		return "All employees details are deleted successfully";
	}

	

	

	



	
	
}
