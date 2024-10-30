import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // corrigé, il ne faut pas de tiret dans l'import
import { ActivatedRoute, Router } from '@angular/router';
import { Models } from '../mail';
import { InsertService } from '../insert.service';
import { HelpService } from '../-help.service';

@Component({
  selector: 'app-edite',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edite.component.html',
  styleUrls: ['./edite.component.css'] // corrigé de 'styleUrl' à 'styleUrls'
})
export class EditeComponent implements OnInit {
  id!: number;
  model!: Models;
  form!: FormGroup;

  constructor(
    public help: HelpService,
    private route: ActivatedRoute,
    private router: Router,
    private service: InsertService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    // Récupération du modèle à partir du service
    this.help.find(this.id).subscribe((data) => {
      this.model = data;
    });

    // Création du formulaire à partir du service
    this.form = this.service.InsertCreate();

    // Si vous souhaitez pré-remplir le formulaire avec les données du modèle récupéré
    if (this.model) {
      this.form.patchValue(this.model);
    }
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.help.Update(this.id, this.model).subscribe(
        (res: any) => {
          console.log('Mail updated successfully!');
          this.router.navigateByUrl('index');
        },
        (error: any) => {
          console.error('Error updating mail!', error);
        }
      );
    } else {
      console.log('Form is invalid!');
    }
  }
}
