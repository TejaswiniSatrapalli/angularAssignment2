export class LeadDTO {

    firstname:string;
	lastname:string;
    lastcontacted:string;
	product:string;
	email:string;
	contact:string;
	leadStage:string;


	constructor(
	firstname:string, 
	lastname:string,
	lastcontacted:string,
	product:string,
	email:string,
	contact:string,
	leadStage:string
	){

		this.firstname=firstname;
		this.lastname=lastname;
		this.lastcontacted=lastcontacted;
		this.product=product;
		this.email=email;
		this.contact=contact;
		this.leadStage=leadStage;

		}

}
