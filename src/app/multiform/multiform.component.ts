import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDatepicker } from '@angular/material/datepicker';



@Component({
  selector: 'app-multiform',
  templateUrl: './multiform.component.html',
  styleUrls: ['./multiform.component.css']
})
export class MultiformComponent implements OnInit {
  
  

  dobDatePicker: any;
  annualDatePicker: any;

  selectedOption: string;

  fileName: string = 'No file chosen';
  fileProgress: number = 0;
  timeRemaining :string='';
  
  identityProofFileName: string = '';
  identityProofProgress: number = 0;
  identityProofTimeRemaining: string = '';

  financialProofFileName: string = '';
  financialProofProgress: number = 0;
  financialProofTimeRemaining: string = '';
 

  constructor(private builder: FormBuilder) {
    this.selectedOption = '';
    
  }

  isLinear = true;

  Multiform = this.builder.group({
    basic: this.builder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email:['',Validators.required], 
      dob:['',Validators.required],
      pincode:['',Validators.required],
      smoke:[''],
      alcohol:[''],
      address:[''],
      dependents:[''],
    }),

    income: this.builder.group({
      annualDate: ['', Validators.required],
      rebate: ['', Validators.required],
      tax:['', Validators.required]

    }),
    document: this.builder.group({

      // identityProof: ['', Validators.required],
      // financialProof: ['', Validators.required]

    }),
    quotation: this.builder.group({
      // tax:['', Validators.required]


      // Add necessary quotation form fields here
    })
  });

  get Basicform() {
    return this.Multiform.get('basic') as FormGroup;
  }

  get incomeForm() {
    return this.Multiform.get('income') as FormGroup;
  }

  get documentForm() {
    return this.Multiform.get('document') as FormGroup;
  }

  get quotationForm() {
    return this.Multiform.get('quotation') as FormGroup;
  }
  

    onSmokeToggleChange(event: MatButtonToggleChange) {
      console.log(event.value);
    }

    onAlcoholToggleChange(event: MatButtonToggleChange) {
      console.log(event.value);
    }

    
  
  isInvalid(controlName: string): boolean {
    const control = this.Multiform.get(controlName);
    return control !== null && control.invalid && (control.dirty || control.touched);
  }
  getDate(): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() -1 ); // Subtract 1 day from the current date
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }



  onIdentityProofSelected(event: any) {
    const file: File = event.target.files[0];
    this.identityProofFileName = file.name;

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      this.identityProofProgress = progress;
      this.identityProofTimeRemaining = this.calculateTimeRemaining(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 1000);
  }

  onFinancialProofSelected(event: any) {
    const file: File = event.target.files[0];
    this.financialProofFileName = file.name;

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      this.financialProofProgress = progress;
      this.financialProofTimeRemaining = this.calculateTimeRemaining(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 1000);
  }

  calculateTimeRemaining(progress: number): string {
    const timeRemaining = Math.floor((100 - progress) / 10) * 5; 
    return `${timeRemaining} seconds`;
  }

  handleSubmit() {
    if (this.Multiform.valid) {
      console.log(this.Multiform.value);
    }
  }

  
  ngOnInit(): void {}
}





  // this.reviewService.submitReview(this.model).subscribe(

  //   data=>{
  //     this.status=true;
  //     this.message="flight review submitted";

  //   },
  //   error=>{
  //     console.log("Error"+error);
  //  }

  // );

  // }





  
  // uploadFile(file: File): void {
  
  //   let progress = 0;
  //   let timeRemaining = 9;

  //   const interval = setInterval(() => {
  //     progress += 10;
  //     this.fileProgress = progress;
  //     this.timeRemaining= `${timeRemaining} seconds `;

  //     timeRemaining -= 1;

  //     if (progress === 100) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  // }

    
   



  // Multiform!: FormGroup;
  // Basicform!: FormGroup;
  // incomeForm!: FormGroup;
  // documentForm!: FormGroup;
  // quotationForm! : FormGroup;

  // constructor(private formBuilder: FormBuilder) {}
  // isLinear = true;

  // ngOnInit() {
  //   this.Multiform = this.formBuilder.group({
  //     basic: this.formBuilder.group({
  //       // Personal details form fields
  //     }),
  //     income: this.formBuilder.group({
  //       // Income details form fields
  //     }),
  //     documents: this.formBuilder.group({
  //       // Document details form fields
  //     })
  //     quotation: this.formBuilder.group({
  //       // Document details form fields
  //     })


  //   });

  //   this.Basicform = this.Multiform.get('basic') as FormGroup;
  //   this.incomeForm = this.Multiform.get('income') as FormGroup;
  //   this.documentForm = this.Multiform.get('documents') as FormGroup;
  // }

 
