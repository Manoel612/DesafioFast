import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"workshops",
        component: WorkshopsComponent
    }
];
