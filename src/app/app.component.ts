import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateComponent } from './mail/create/create.component';
import { ViewComponent } from './mail/view/view.component';
import { EditeComponent } from './mail/edite/edite.component';
import { IndexComponent } from './mail/index/index.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreateComponent,ViewComponent,EditeComponent,IndexComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD';
}
