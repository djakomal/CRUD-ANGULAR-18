import { Component, OnInit } from '@angular/core';
import { HelpService } from '../-help.service';
import { Router, RouterLink } from '@angular/router';
import {  FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InsertService } from '../insert.service';
import { Models } from '../mail';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
  models:Models=new Models
 
  form!: FormGroup;
  constructor(public helpe: HelpService,
    private router: Router,
    private service: InsertService
  ){}

    ngOnInit(){
      this.form= this.service.InsertCreate();
      //  new FormGroup({
      //   email: new FormGroup(''),
      //   recive: new FormGroup(''),
      //   Obejt: new FormGroup(''),
      //   description: new FormGroup(''),
        
      // })
    }



    submit(){
      console.log(this.form.value);
      this.helpe.create(this.form.value).subscribe(
        (response) => {
           console.log(response);
           this.router.navigateByUrl("index");
      })
      // console.log(this.form.value);
      // this.form.reset();
      // console.log(this.models);
    }

    
}
