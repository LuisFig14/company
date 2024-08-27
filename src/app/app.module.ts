import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
