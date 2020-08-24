import { FormComponent } from './form/form.component';
import { BlockComponent } from './block/block.component';
import { PricingComponent } from './pricing/pricing.component';
import { DefaultCardComponent } from './default-card/default-card.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'card',
    component: DefaultCardComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'block',
    component: BlockComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
