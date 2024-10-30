import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(
    private fb: FormBuilder
  ) { }

  public InsertCreate() {
    return this.fb.group({
     
        email: '',
        reciver: '',
        objet: '',
        description:''

    })
  }
}
