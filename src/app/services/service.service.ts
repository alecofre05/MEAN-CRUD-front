import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'http://localhost:4000/api/servicios/';

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteServices(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveServices(service: Service): Observable<any> {
    return this.http.post(this.url, service);
  }

  getServiceByID(id: string): Observable<any> { 
    return this.http.get(this.url + id);
  } 

  updateServices(id: string, service: Service): Observable<any> { 
    return this.http.put(this.url + id, service);
  }

  getServiceByBank(bankName: string): Observable<any> {
    return this.http.get(this.url + 'banco/' + bankName);
  }
}
