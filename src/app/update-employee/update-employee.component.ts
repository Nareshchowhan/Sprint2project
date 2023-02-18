import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'model/employee';
import { EmployeeService } from 'service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee!: Employee;
  id!: number;
 
constructor(private router:Router,private route:ActivatedRoute,private employeeService:EmployeeService)
{}
  
  ngOnInit()
  {
    this.employee=new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(data=> {
      this.employee = data; 
      console.log(data)  
      });
  }
  

onSubmit()
{
  this.employeeService.updateEmployee(this.id, this.employee).subscribe((result:any)=>this.employee=result)
}
gotoList() {
  this.router.navigate([ '/allemployees']);
}



}

