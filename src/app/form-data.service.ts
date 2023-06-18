import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  public multiformValues:any={};
  formValues: any;

  constructor() { }
}
