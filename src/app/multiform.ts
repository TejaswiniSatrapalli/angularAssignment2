export class Multiform {

    
    firstName:string;
	lastName:string;
    phoneNumber :string;
	email:string;
	dob:Date;
	pincode:number;
	gender :string;
	smoker:string;
	alcoholic:string;
	address:string;
	dependant:string;
	annualIncome:Date;
	govRebate:string;
	taxRebate:string;
	idProof:string;
	financialProof:string;
	// quotationRef:string;
	premium:string;
	product:string;
	// sum:number;
	leadStage:string;
	contacted:string;


	constructor(
	firstName:string, 
	lastName:string,
	phoneNumber :string,
	email:string,
	dob:Date,
	pincode:number,
	gender :string,
	smoker:string,
	alcoholic:string,
	address:string,
	dependant:string,
	annualIncome:Date,
	govRebate:string,
	taxRebate:string,
	idProof:string,
	financialProof:string,
	// quotationRef:string,
	premium:string,
	product:string,
	sum:number,
	leadStage:string,
	contacted:string
	){

		this.firstName=firstName;
		this.lastName=lastName;
		this.phoneNumber=phoneNumber;
		this.email=email;
		this.dob=dob;
		this.pincode=pincode;
		this.gender=gender;
		this.smoker=smoker;
		this.alcoholic=alcoholic;
		this.address=address;
		this.dependant=dependant;
		this.annualIncome=annualIncome;
		this.govRebate=govRebate;
		this.taxRebate=taxRebate;
		this.idProof=idProof;
		this.financialProof=financialProof;
		this.premium=premium;
		this.product=product;
		// this.sum=sum;
		this.leadStage=leadStage;
		this.contacted=contacted;

		}


}
