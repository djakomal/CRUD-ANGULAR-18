import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HelpService } from '../-help.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Models } from '../mail';


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
  constructor(
    public help: HelpService,
    private route: ActivatedRoute,
    private router: Router
   ) { }


   ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
          
    this.help.find(this.id).subscribe((data: Models)=>{
      this.model = data;
    });
  }
      

}
