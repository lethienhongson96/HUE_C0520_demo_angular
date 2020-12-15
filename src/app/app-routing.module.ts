import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./users/user-list/user-list.component";
import {UserAddComponent} from "./users/user-add/user-add.component";


const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/create',
    component: UserAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
