import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'model/company';
import { Employee } from 'model/employee';
import { CompanyService } from 'service/company.service';
import { EmployeeService } from 'service/employee.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit{
  id!: number;
  company!: Company;

  constructor(private route: ActivatedRoute,private router: Router,
    private companyService: CompanyService) { }

  ngOnInit() {
    this.company = new Company();
    this.id = this.route.snapshot.params['id'];
    this.companyService.getCompany(this.id)
      .subscribe(data => {
        console.log(data)
        this.company = data;
      });
  }

  list(){
    this.router.navigate(['allcompanies']);
  }
}
