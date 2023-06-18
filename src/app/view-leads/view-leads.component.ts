import { Component } from '@angular/core';
import { LeadDTO } from '../lead-dto';
import { LeadService } from '../lead.service';

@Component({
  selector: 'app-view-leads',
  templateUrl: './view-leads.component.html',
  styleUrls: ['./view-leads.component.css']
})
export class ViewLeadsComponent {

  allLeads:LeadDTO[]=[];
  constructor(private leadService : LeadService){

    leadService. getAllLeadsFromSpring().subscribe(
      data=>{
        this.allLeads = data;
      },
      err=>{
        console.log("Error" +err);
      }
    );
  }

  }

