import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { GuestComponent } from './guest.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [HomeComponent, ProductComponent, ContactComponent, GuestComponent, AboutComponent, FaqComponent],
  imports: [
    CommonModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }
