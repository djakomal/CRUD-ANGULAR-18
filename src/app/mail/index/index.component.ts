import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HelpService } from '../-help.service';
 
import { CommonModule } from '@angular/common';
import { Models } from '../mail';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{
  models!:Models[];

  constructor(private helpe:HelpService,
    private router:Router
  ){}



  ngOnInit(): void{
    this.helpe.getAll().subscribe(
      (data)=>{
      this.models = data;
      console.log(data);})
  }



  deleteMail(id:number){
    this.helpe.delete(id).subscribe(res => {
      this.models = this.models.filter(item => item.id !==id);
      console.log('mail delete  succesfully ');
    })
  }

}
