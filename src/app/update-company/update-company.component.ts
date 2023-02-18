import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'model/company';
import { CompanyService } from 'service/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements  OnInit{
  company!: Company;
  id!:number;
 
   
  constructor(private router:Router,private route:ActivatedRoute,private companyService:CompanyService)
  {
   
  }
    ngOnInit(){
      this.company=new Company();
      this.id = this.route.snapshot.params['id'];
        this.companyService.getCompany(this.id).subscribe((data: Company) => {
            console.log(data)
            this.company = data;
          });
    }
  

  onSubmit()
  {
    this.companyService.updateCompany(this.id,this.company).subscribe((result:any)=>this.company=result);
  }
  gotoList() {
    this.router.navigate(['/allcompanies']);
  }
  
  
  
  }