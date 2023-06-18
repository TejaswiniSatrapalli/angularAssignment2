import { Component } from '@angular/core';
import { LeadDTO } from '../lead-dto';
import { LeadService } from '../lead.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent {

  allLeads:LeadDTO[]=[]
  constructor(private leadService: LeadService) {
   
  }


}
