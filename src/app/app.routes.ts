import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Login } from './pages/login.component/login';
import { RidesComponent } from './pages/rides-component/rides-component';

export const routes: Routes = [
    {path: '', component: Login},
    {path:'rides',component:RidesComponent}
];
