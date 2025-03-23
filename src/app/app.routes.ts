import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "newUser", component: NewUserComponent },
    { path: "updateUser", component: UpdateUserComponent },
    { path: "employee/:idEmployee", component: ViewUserComponent },
    { path: "employee/update/:idEmployee", component: UpdateUserComponent }
];
