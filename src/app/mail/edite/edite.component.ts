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
  model: Models = new Models();
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
    this.help.find(this.id).subscribe((data => {
      this.model = data;
      console.log(this.model);
    }));

    // Création du formulaire à partir du service
    this.form = this.service.InsertCreate();

    //  pré-remplir le formulaire avec les données du modèle récupéré
    if (this.model) {
      this.form.patchValue(this.model);
    }
  }



  submit() {
    if (this.form.valid) {
      // lui aussi marche mais c'est manuel
      // if (this.form.value.email) this.model.email = this.form.value.email;
      // if (this.form.value.reciver) this.model.reciver = this.form.value.reciver;
      // if (this.form.value.objet) this.model.objet = this.form.value.objet;
      // if (this.form.value.description) this.model.description = this.form.value.description;
          // Parcours des champs du formulaire pour mettre à jour `this.model`
    for (let key in this.form.value) {
            // Type assertion pour dire à TypeScript que `key` est une clé valide dans `this.model`
      if (this.form.value[key] !== null && this.form.value[key] !== '') {
        this.model[key] = this.form.value[key];
      }
    }
      console.log(this.model);
      this.help.Update(this.id, this.model).subscribe(
        (res: any) => {
          console.log('Mail updated successfully!',res);
          alert("modification reussi ")
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
