import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'model/employee';
import { EmployeeService } from 'service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent  {

  employee: Employee;
  //submitted=false;
  
  constructor(private router: Router,private route:ActivatedRoute,private employeeService: EmployeeService){
    this.employee=new Employee();
  }

  newEmployee(): void {
    //this.submitted = false;
    this.employee = new Employee();
  }

  add() {
    this.employeeService['addEmployee'](this.employee)
      .subscribe((data:any) => this.employee=data);
    
    this.gotoList();
  }

  onSubmit() {
   // this.submitted = true;
    this.add();    
  }

  gotoList() {
    this.router.navigate(['/allemployees']);
  }
}
 

