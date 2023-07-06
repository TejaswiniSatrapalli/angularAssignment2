import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name!: string;
  email!: string;
  accountNumber!: string;
  ifscCode!: string;
  accountType!: string;
  country!: string;
  city!: string;
  address!: string;
  postalCode!: string;
  recipientName: any;
  bankDetails: any;
  recipientType:any;
  receiveAmount!: number;

  
  selectRecipientType(type: string) {
    this.recipientType = type;
  }

    isRecipientDetailsValid(): boolean {
      return (
        this.name !== '' &&
        this.email !== '' &&
        this.accountNumber !== '' &&
        this.ifscCode !== '' &&
        this.accountType !== '' &&
        this.country !== '' &&
        this.city !== '' &&
        this.address !== '' &&
        this.postalCode !== ''
      );
    }

isInternationalTransfer: boolean = true;
isSameCurrencyTransfer: boolean = false;
  
currentStep = 1;
isInternational = false;
isSameCurrency = false;


totalAmount!: number;
amount!: number;

transferType: string = 'international';

sendAmount: number | null = 10000; // Set the default value for sendAmount
fromCountry: string = 'INR'; // Set the default value for fromCountry
toCountry: string = 'USD'; // Set the default value for toCountry

 
  exchangeRates: { [key: string]: number } = {
    USD: 1,
    INR: 80,  // USD to INR
    GBP: 0.9, // USD to GBP
    EUR: 0.8, // USD to EUR
    AUD: 1.2  // USD to AUD
  };

  fromAmount: any;

  
selectTransferType(type: string) {
  this.transferType = type;
}
// calculateReceiveAmount() {
//   let bankTransferFee = 0;
//   let ourFee = 2000;
//   let exchangeRate = 80;

//   if (this.fromCountry === 'USD' && this.toCountry === 'INR') {
//     exchangeRate = 80;
//   } else if (this.fromCountry === 'INR' && this.toCountry === 'USD') {
//     exchangeRate = 1 / 80;
//   }

//   this.receiveAmount = (this.sendAmount! - (bankTransferFee + ourFee)) * exchangeRate;
// }


getBankTransferFee(): string {
  return '0'; // Replace with actual logic to get the bank transfer fee
}

getOurFee(): string {
  const ourFee = this.sendAmount! * 0.1; // Calculate our fee as 10% of the send amount
  return ourFee.toString();
}

getTotalFees(): string {
  const bankTransferFee = parseInt(this.getBankTransferFee(), 10);
  const ourFee = parseInt(this.getOurFee(), 10);
  const totalFees = bankTransferFee + ourFee;
  return totalFees.toString();
}


getTotalAmountConvert(): string {
  const bankTransferFee = parseInt(this.getBankTransferFee(), 10);
  const ourFee = parseInt(this.getOurFee(), 10);
  const totalFees = this.sendAmount! - (bankTransferFee + ourFee);
  return totalFees.toString();  
}



  calculateReceiveAmount(): number | null {
    if (this.sendAmount && this.fromCountry && this.toCountry) {
      const fromExchangeRate = this.exchangeRates[this.fromCountry];
      const toExchangeRate = this.exchangeRates[this.toCountry];
      return ((this.sendAmount! - (this.sendAmount! * 0.1 ))/fromExchangeRate ) * toExchangeRate;
    } else {
      return null;
    }
  }



    // isValidAmountStep(): boolean {
    //   if (this.isInternationalTransfer) {
    //     return this.fromAmount && this.fromCurrency && this.toAmount && this.toCurrency;
    //   } else if (this.isSameCurrencyTransfer) {
    //     return this.amount && this.country;
    //   }
    //   return false;
    // }
  


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


     
        if (this.recipientType === 'myself') {
          // Navigate to Myself form page
          this.router.navigate(['/myself']);
        } else if (this.recipientType === 'recipient') {
          // Navigate to Recipient form page
          this.router.navigate(['/recipient']);
        } else if (this.recipientType === 'business') {
          // Navigate to Business form page
          this.router.navigate(['/business']);
        
      }
    }
    
    
    
    }
  



constructor(private router: Router) {}

navigateToFormPage(page: string) {
  this.router.navigate([page]);
}

  logout() {
    // Remove the user details from local storage or perform any cleanup tasks

    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

//   fromCountry!: string;
// sendAmount!: number;
// currentStep!: number;



}

