import { Routes } from '@angular/router';
import { IndexComponent } from './mail/index/index.component';
import { CreateComponent } from './mail/create/create.component';
import { ViewComponent } from './mail/view/view.component';
import { EditeComponent } from './mail/edite/edite.component';

export const routes: Routes = [
     
    {
        path:'index',component:IndexComponent
    },
    {
        path:'create',component:CreateComponent
    },
    {
        path:'View/:id',component:ViewComponent
    }, 
     {
        path:'edite/:id',component:EditeComponent
    },
    {
        path:'edite',component:EditeComponent
    }
];
