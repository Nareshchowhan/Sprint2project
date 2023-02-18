import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'model/employee';
import { Observable } from 'rxjs';
import { EmployeeService } from 'service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  implements OnInit{
  employees:any;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.employeeService.getEmployeesList().subscribe(data=>{this.employees=data;});
  }

  deleteEmployee(id: number) {
     this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          alert("data deleted successfully")
          console.log(data);
          this.ngOnInit();
        });
  }

  employeeDetails(id: number){
    this.router.navigate(['getemployee', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['updateemployee', id]);
  }
  

}
