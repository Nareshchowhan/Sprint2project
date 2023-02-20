package com.employeemgmnt.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Employee {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)   //Auto-generation of Id
	@Column(name="EmployeeId")   //naming the column in the table
	private Integer id;
	@Column(name="EmployeeName",length=20)
	private String name;
	@Column(name="EmployeeAge")
	private Integer age;
	@Column(name="EmployeeEmailId",length=25)
	private String emailId;
	@Column(name="EmployeeMobileNo.")
	private String mobileNo;
	
	
	
	
}
