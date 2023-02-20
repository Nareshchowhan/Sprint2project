package com.employeemgmnt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeemgmnt.dtos.EmployeeDTO;
import com.employeemgmnt.entities.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
