import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BuyerPageComponent } from './components/buyer-page/buyer-page.component';
import { ContactusComponent } from './components/contactus/contactus.component';




const routes: Routes = [
   { path: "buyer", component:BuyerPageComponent},
   {path: "contact", component:ContactusComponent},
   {path:"about",component:AboutUsComponent}
  
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }