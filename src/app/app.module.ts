import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ServiciosComponentComponent } from './servicios-component/servicios-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponentComponent,
    ContactComponentComponent,
    ServiciosComponentComponent,
    BlogComponentComponent,
    LoginComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
