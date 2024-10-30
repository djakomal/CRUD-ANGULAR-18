import { Routes } from '@angular/router';
import { IndexComponent } from './mail/index/index.component';
import { CreateComponent } from './mail/create/create.component';
import { ViewComponent } from './mail/view/view.component';
import { EditeComponent } from './mail/edite/edite.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'index',pathMatch:'full'
    },
    {
        path:'index',component:IndexComponent
    },
    {
        path:'create',component:CreateComponent
    },
    {
        path:'View',component:ViewComponent
    }, 
     {
        path:'edite',component:EditeComponent
    }
];
