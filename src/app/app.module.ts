import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LeadComponent } from './lead/lead.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';



import { SidenavComponent } from './sidenav/sidenav.component';

import { QualifiedComponent } from './qualified/qualified.component';
import { ExpiredComponent } from './expired/expired.component';
import { InterestedComponent } from './interested/interested.component';
import { RenewalComponent } from './renewal/renewal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MultiformComponent } from './multiform/multiform.component';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';


import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { ViewLeadsComponent } from './view-leads/view-leads.component';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PaymentLinkComponent } from './payment-link/payment-link.component';





const allLinks:Routes = [
  {path:'multiform',component:MultiformComponent},
  {path:'leads',component:LeadComponent},
  {path:'viewLeads',component:ViewLeadsComponent},
  {path:'paymentLink',component:PaymentLinkComponent},

 
]


@NgModule({
  declarations: [
    AppComponent,
    LeadComponent,
  
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    QualifiedComponent,
    ExpiredComponent,
    InterestedComponent,
    RenewalComponent,
    MainComponent,
    MultiformComponent,
    QuotationFormComponent,
    ViewLeadsComponent,
    PaymentLinkComponent

  ],
  imports: [
    FormsModule,BrowserModule,RouterModule.forRoot(allLinks), HttpClientModule,  
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,

    BrowserAnimationsModule,
    MatProgressBarModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonToggleModule,
 
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
