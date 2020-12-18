import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {NgxPaginationModule} from "ngx-pagination";
import { InputSearchComponent } from './core/input-search/input-search.component';
import { MessageComponent } from './core/message/message.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import {HttpClientModule} from "@angular/common/http";
import { GroupAddComponent } from './groups/group-add/group-add.component';
import { GroupEditComponent } from './groups/group-edit/group-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    InputSearchComponent,
    MessageComponent,
    UserAddComponent,
    UserEditComponent,
    GroupListComponent,
    GroupAddComponent,
    GroupEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
