import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

const routes: Routes =[
  {path: '', redirectTo: '/', pathMatch:'full'},
  {path: '' , component:HomeComponent },
  {path: 'contact', component:ContactComponentComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
