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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    InputSearchComponent,
    MessageComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
