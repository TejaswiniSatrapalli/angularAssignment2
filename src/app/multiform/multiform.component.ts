import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-multiform',
  templateUrl: './multiform.component.html',
  styleUrls: ['./multiform.component.css']
})
export class MultiformComponent implements OnInit {
  dobDatePicker: any;
  annualDatePicker: any;
  // selectedOption!: string ;
  fileName: string = 'No file chosen';
  fileProgress: number = 0;
  timeRemaining: string = '';
  idProofFileName: string = '';
  idProofProgress: number = 0;
  idProofTimeRemaining: string = '';
  financialProofFileName: string = '';
  financialProofProgress: number = 0;
  financialProofTimeRemaining: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  isLinear = true;

  Multiform: FormGroup = this.formBuilder.group({
    basic: this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      pincode: ['', Validators.required],
      gender:[''],
      smoking: [''],
      drinking: [''],
      address: [''],
      dependent: [''],
    }),
    income: this.formBuilder.group({
      annualIncome: ['', Validators.required],
      govRebate: ['', Validators.required],
      tax: ['', Validators.required],
    }),
    document: this.formBuilder.group({}),
    idProof:[''],
    financialProof:[''],


    quotation: this.formBuilder.group({}),
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
    currentDate.setDate(currentDate.getDate() - 1); // Subtract 1 day from the current date
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  onIdProofSelected(event: any) {
    const file: File = event.target.files[0];
    this.idProofFileName = file.name;

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      this.idProofProgress = progress;
      this.idProofTimeRemaining = this.calculateTimeRemaining(progress);
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
        const basicForm = this.Multiform.get('basic');
        const incomeForm = this.Multiform.get('income');
    
        if (basicForm && incomeForm) {
          const Multiform = {
            basic: basicForm.value,
            income: incomeForm.value,
          };
  
          console.log(Multiform);
    
        this.http.post('http://localhost:9090/leads/add',Multiform).subscribe(
          response => {
            console.log('Form data submitted successfully');
          },
          error => {
            console.error('error', error);
          }
        );
      
        }
      }
    }
    
    ngOnInit(): void {}
    }
    
      // if (this.Multiform.valid) {
      //   const FormData = {
      //     basic: this.Multiform.get('basic')?.value,
      //     income: this.Multiform.get('income')?.value,
      //   };

      // }
  
      //     this.http.post('http://localhost:9090/leads', FormData).subscribe(
      //       (response) => {
      //         console.log(response);
      //         // Handle successful response
      //       },
      //       (error) => {
      //         console.error('Error saving data:',error);
      //         // Handle error
      //       }
      //     );
      //   }
  

  
//   handleSubmit() {
//     if (this.Multiform.valid) {
//       const formData = {
//         basic: this.Multiform.get('basic')?.value,
//         income: this.Multiform.get('income')?.value,
//       };

//       this.http.post('http://localhost:9090/submit-form', formData).subscribe(
//         (response) => {
//           console.log(response);
//           // Handle successful response
//         },
//         (error) => {
//           console.error(error);
//           // Handle error
//         }
//       );
//     }
//   }

//   ngOnInit(): void {}
// }




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

 
