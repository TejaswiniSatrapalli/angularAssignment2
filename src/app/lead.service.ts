import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeadDTO } from './lead-dto';
import { Multiform } from './multiform';


@Injectable({
  providedIn: 'root'
})
export class LeadService {

  baseURL:string = 'http://localhost:9090';

allLeadsEndPoint : string= this.baseURL+'/leads/all';


submitMultiformEndPoint:string=this.baseURL+'/leads/addlead';


  constructor(private http:HttpClient) { }


  submitMultiform(multiform: Multiform): Observable<Multiform> {
    console.log("Inside submitMultiform method:", multiform);

    return this.http.post<Multiform>(this.submitMultiformEndPoint, multiform);
  }


  getAllLeadsFromSpring():Observable<LeadDTO[]>
  {
    console.log("inside service : "+this.allLeadsEndPoint);


    return this.http.get<LeadDTO[]>(`${this.allLeadsEndPoint}`);
  }
}
