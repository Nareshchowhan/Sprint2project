import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import{HttpClientModule} from '@angular/common/http';
import { EmployeeService } from 'service/employee.service';
import { CompanyService } from 'service/company.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    AddCompanyComponent,
    CompanyListComponent,
    UpdateEmployeeComponent,
    UpdateCompanyComponent,
    EmployeeDetailsComponent,
    CompanyDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService,CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
