import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserInputComponent } from './users/user-input/user-input.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersService } from './users/users.service';
import { DataStorageService } from './users/data-storage.servcie';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService,
              DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
