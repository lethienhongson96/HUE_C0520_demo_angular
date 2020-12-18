import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./users/user-list/user-list.component";
import {UserAddComponent} from "./users/user-add/user-add.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";
import {GroupListComponent} from "./groups/group-list/group-list.component";
import {GroupAddComponent} from "./groups/group-add/group-add.component";
import {GroupEditComponent} from "./groups/group-edit/group-edit.component";


const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/create',
    component: UserAddComponent
  },
  {
    path: 'users/:id/edit',
    component: UserEditComponent
  },
  {
    path: 'groups',
    component: GroupListComponent
  },

  {
    path: 'groups/create',
    component: GroupAddComponent
  },

  {
    path: 'groups/:id/edit',
    component: GroupEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
