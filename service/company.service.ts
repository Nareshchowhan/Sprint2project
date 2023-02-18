import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'model/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private getCompanyUrl = 'http://localhost:8080/getCompanyById';
  private addCompanyUrl = 'http://localhost:8080/addcompany';
  private updateCompanyUrl ='http://localhost:8080/updateCompany';
  private deleteCompanyUrl='http://localhost:8080/deleteCompany';
  private getCompaniesListUrl = 'http://localhost:8080/allcompanies';


  constructor(private http: HttpClient) { }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.getCompanyUrl}/${id}`);
  }

  public addCompany(company: Company) {
    return this.http.post<Company>(`${this.addCompanyUrl}`, company);
  }

 public  updateCompany(id: number, company:Company): Observable<object> {
    return this.http.put<Company>(`${this.updateCompanyUrl}/${id}`, company);
  }

 public  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.deleteCompanyUrl}/${id}`, { responseType: 'text' });
  }

  public getCompaniesList(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.getCompaniesListUrl}`);
}
}
