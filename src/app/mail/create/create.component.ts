import { Component } from '@angular/core';
import { Models } from '../models';
import { HelpService } from '../-help.service';
import { Router, RouterLink } from '@angular/router';
import {  FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
 
  form!:FormGroup

  constructor(public helpe: HelpService,
    private router: Router){}

    ngOnInit(){
      this.form= new FormGroup({
        email: new FormGroup('', [Validators.required]),
        emailToRecive: new FormGroup('',[Validators.required]),
        Obejt: new FormGroup('',[Validators.required]),
        description: new FormGroup('',[Validators.required]),
        
      })
    }

    get f(){
      return this.form.controls;
    }

    submit(){
      console.log(this.form.value);
      this.helpe.create(this.form.value).subscribe((res:any) => {
           console.log('Mail created successfully!');
           this.router.navigateByUrl('index');
      })
    }
}
