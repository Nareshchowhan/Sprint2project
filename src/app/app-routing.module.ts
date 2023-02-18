import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  
  { path: 'allemployees', component: EmployeeListComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'updateemployee/:id', component: UpdateEmployeeComponent },
  { path: 'getemployee/:id', component: EmployeeDetailsComponent },

  { path: 'allcompanies', component: CompanyListComponent },
  { path: 'addcompany', component: AddCompanyComponent },
  { path: 'updateCompany/:id', component: UpdateCompanyComponent },
  { path: 'getCompanyById/:id', component: CompanyDetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
