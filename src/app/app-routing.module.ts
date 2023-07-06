import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessBankComponent } from './business-bank/business-bank.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecipientBankComponent } from './recipient-bank/recipient-bank.component';
import { SignupComponent } from './signup/signup.component';
import { UserBankComponent } from './user-bank/user-bank.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'myself', component: UserBankComponent },
  { path: 'recipient', component: RecipientBankComponent },
  { path: 'business', component: BusinessBankComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
