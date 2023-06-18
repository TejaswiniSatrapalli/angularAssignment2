import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeadDTO } from './lead-dto';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  baseURL:string = 'http://localhost:2020';

allLeadsEndPoint : string= this.baseURL+'/lead/allLeads';


  constructor(private http:HttpClient) { }

  getAllLeadsFromSpring():Observable<LeadDTO[]>
  {
    console.log("inside service : "+this.allLeadsEndPoint);


    return this.http.get<LeadDTO[]>(`${this.allLeadsEndPoint}`);
  }
}
