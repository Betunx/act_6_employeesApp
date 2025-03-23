import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iresponse } from '../interfaces/iresponse.interface';
import { lastValueFrom, Observable } from 'rxjs';
import { IEmployee } from '../interfaces/iemployee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private httpClient = inject(HttpClient)
  private baseUrl: string = "https://peticiones.online/api/users";

  getAllObservable(): Observable<Iresponse> {
    return this.httpClient.get<Iresponse>(this.baseUrl)
  }

  getById(id: string): Promise<IEmployee> {
    return lastValueFrom(this.httpClient.get<IEmployee>(`${this.baseUrl}/${id}`))
  }

  delete(id: string): Promise<IEmployee> {
    return lastValueFrom(this.httpClient.delete<IEmployee>(`${this.baseUrl}/${id}`))
  }

}
