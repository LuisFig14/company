import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ServiciosComponentComponent } from './servicios-component/servicios-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes =[
  {path: '', redirectTo: '/', pathMatch:'full'},
  {path: '' , component:HomeComponent },
  {path: 'Servicios' , component:ServiciosComponentComponent},
  {path: 'Contact', component:ContactComponentComponent},
  {path: 'Blog', component:BlogComponentComponent},
  {path: 'Login', component:LoginComponentComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
