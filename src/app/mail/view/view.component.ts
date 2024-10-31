import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HelpService } from '../-help.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Models } from '../mail';
import { InsertService } from '../insert.service';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  id!: number;
  model!: Models;
  form!: FormGroup;
  constructor(
    public help: HelpService,
    private route: ActivatedRoute,
    private router: Router,
    private service: InsertService
   ) { }


   ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // Récupération du modèle à partir du service
    this.help.find(this.id).subscribe((data=>{
      this.model = data;
    }));

     // Création du formulaire à partir du service
    this.form = this.service.InsertCreate();
    
    //  pré-remplir le formulaire avec les données du modèle récupéré
    if (this.model) {
      this.form.patchValue(this.model);
    }

  }
      

}
