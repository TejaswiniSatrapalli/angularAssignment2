import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


   isInternationalTransfer: boolean = true;
    isSameCurrencyTransfer: boolean = false;
    
  currentStep = 1;
  isInternational = false;
  isSameCurrency = false;

  fromCountry!: string;
  toCountry!: string;
  totalAmount!: number;
  amount!: number;

  recipientName!: string;
  email!: string;
  bankDetails!: string;
  fromAmount: any;
  fromCurrency: any;
  toAmount: any;
  toCurrency: any;
  country: any;
  
   
    calculateAmount() {
      // Implement the logic to calculate the converted amount based on the exchange rate
      // You can use an API or a predefined exchange rate mapping
      // Update the 'toAmount' based on the calculation
    }
  
    isValidAmountStep(): boolean {
      if (this.isInternationalTransfer) {
        return this.fromAmount && this.fromCurrency && this.toAmount && this.toCurrency;
      } else if (this.isSameCurrencyTransfer) {
        return this.amount && this.country;
      }
      return false;
    }
  
  



  selectTransferType(transferType: string) {
    if (transferType === 'international') {
      this.isInternationalTransfer = true;
      this.isSameCurrencyTransfer = false;
    } else if (transferType === 'sameCurrency') {
      this.isInternationalTransfer = false;
      this.isSameCurrencyTransfer = true;
    }
  }

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    } else {
      // Save form data to localStorage
      const formData = {
        fromCountry: this.fromCountry,
        toCountry: this.toCountry,
        totalAmount: this.totalAmount,
        amount: this.amount,
        recipientName: this.recipientName,
        email: this.email,
        bankDetails: this.bankDetails
      };
      console.log("saved data");
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }



constructor(private router: Router) {}

  logout() {
    // Remove the user details from local storage or perform any cleanup tasks

    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}

