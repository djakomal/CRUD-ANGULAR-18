import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Models } from '../models';
import { HelpService } from '../-help.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edite',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edite.component.html',
  styleUrl: './edite.component.css'
})
export class EditeComponent {
  id!: number;
  model!: Models;
  form!: FormGroup;

  constructor(
    public help: HelpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    this.id= this.route.snapshot.params['id'];
    this.help.find(this.id).subscribe((data:Models)=>{
      this.model=data;
    })

    this.form= new FormGroup({
      email: new FormGroup('', [Validators.required]),
      emailToRecive: new FormGroup('',[Validators.required]),
      obejt: new FormGroup('',[Validators.required]),
      description: new FormGroup('',[Validators.required]),
      
    })
  }

  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value);
    this.help.Update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Mail updated successfully!');
         this.router.navigateByUrl('index');
    })
  }

}
