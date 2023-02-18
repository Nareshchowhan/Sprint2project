import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'model/company';
import { Observable } from 'rxjs';
import { CompanyService } from 'service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent  implements OnInit{
  companies:any;

  constructor(private route: ActivatedRoute,private companyService: CompanyService,
    private router: Router) {}

  ngOnInit() {
    this.companyService.getCompaniesList().subscribe(data=>(this.companies=data));
  }

 
  deleteCompany(id: number) {
    this.companyService.deleteCompany(id)
      .subscribe(
        data => {
          alert("data deleted successfully")
          console.log(data);
          this.ngOnInit();
        });
        
  }
companyDetails(id: number){
    this.router.navigate(['getCompanyById', id]);
  }

  updateCompany(id: number){
    this.router.navigate(['updateCompany', id]);
  }
}
