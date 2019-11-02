import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestComponent } from './guest.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },            
  { path: 'home',  component: HomeComponent},
  { path: 'contact',  component: ContactComponent}  ,
  { path: 'about',  component: AboutComponent} ,
  { path: 'product',  component: ProductComponent} ,
  { path: 'faqs',  component: FaqComponent}      
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
