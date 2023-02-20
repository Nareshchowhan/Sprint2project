package com.employeemgmnt.service;

import java.util.List;

import com.employeemgmnt.dtos.EmployeeDTO;
import com.employeemgmnt.entities.Employee;

public interface EmployeeService {
	Employee saveEmployee(EmployeeDTO employeeDTO);    //saving employee details
	
	public List<Employee> displayAll();                 //displaying the list of all employee details
	
	Employee getEmployeeById(Integer Id);                      //getting the required employee details
	
	public String deleteEmployeeById(Integer Id);             //delete employee
	
	public String deleteAllEmployee();                        //delete all the employee
	
	public String updateEmployee(Integer Id, EmployeeDTO params);            //updating the employee details
	
	
}