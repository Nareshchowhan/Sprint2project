package com.employeemgmnt.entities;



import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
public class Company {
	@Id
	//@GeneratedValue(strategy=GenerationType.AUTO)  //Auto-generation of Id
	private Integer id;
	@Column(name="CompanyName",length=20)  //Naming the column and defining the length of the column name
	private String name;
	@Column(name="CompanyLocation",length=30)
	private String location;
	@Column(name="LocationPincode",length=35)
	private String pincode;

	//@OneToMany(cascade = CascadeType.ALL)
	//name we can give anything which is a primary key of other table 
	//@JoinColumn(name="companyId",referencedColumnName = "companyId")
	//private List<Employee> employees;

}
