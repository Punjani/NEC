import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserDetailsComponent } from './add-user-details/add-user-details.component';

const routes: Routes = [
  { path: 'users', component: UserDetailsComponent, pathMatch: 'full' },
  { path: 'addUser', component: AddUserDetailsComponent , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
