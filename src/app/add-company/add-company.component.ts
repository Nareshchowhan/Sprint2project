import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from 'model/company';
import { CompanyService } from 'service/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent  {

  company: Company;
  //submitted = false;

  constructor(private companyService: CompanyService,private route:ActivatedRoute,
    private router: Router) { 
      this.company=new Company();
    }


  newCompany(): void{
    //this.submitted = false;
    this.company = new Company();
  }

  add() {
    this.companyService['addCompany'](this.company)
    .subscribe((data:any) => this.company=data);
  
  this.gotoList();
  }

  onSubmit() {
    //this.submitted = true;
    this.add();    
  }

  gotoList() {
    this.router.navigate(['/allcompanies']);
  }
}