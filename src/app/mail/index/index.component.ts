import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HelpService } from '../-help.service';
import { Models } from '../models';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  models:Models[]=[];

  constructor(private helpe:HelpService){}



  ngOnInit(): void{
    this.helpe.getAll().subscribe((data: Models[])=>{
    this.models = data;
    console.log(this.models);
  })}

  deleteMail(id:number){
    this.helpe.delete(id).subscribe(res => {
      this.models = this.models.filter(item => item.id !==id);
      console.log('mail delete  succesfully ');
    })
  }

}
