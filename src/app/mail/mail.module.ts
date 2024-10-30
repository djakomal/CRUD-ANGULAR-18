import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { EditeComponent } from './edite/edite.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IndexComponent,
    EditeComponent,
    ViewComponent,
    CreateComponent,
    
  ]
})
export class MailModule { }
