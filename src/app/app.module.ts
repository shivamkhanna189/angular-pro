import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthUserComponent,
    AuthRememberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
