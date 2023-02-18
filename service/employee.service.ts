import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private getByIdUrl = 'http://localhost:8080/getemployee';
  private addUrl = 'http://localhost:8080/addemployee';
  private updateUrl ='http://localhost:8080/updateemployee';
  private deleteUrl='http://localhost:8080/deleteemployee';
  private getListUrl = 'http://localhost:8080/allemployees';

  constructor(private http: HttpClient) { }


  public addEmployee(employee: Employee) {
    return this.http.post<Employee>(`${this.addUrl}`, employee);
  }
  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.getByIdUrl}/${id}`);
  }

 public  updateEmployee(id: number, employee:Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.updateUrl}/${id}`, employee);
  }

 public  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.deleteUrl}/${id}`, { responseType: 'text' });
  }

  public getEmployeesList(): Observable<Employee[]> {          
    return this.http.get<Employee[]>(`${this.getListUrl}`);
  }


}
