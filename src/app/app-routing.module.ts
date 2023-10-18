import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'countries',
    loadChildren: ()=>import('./ecommerse/ecommerse.module').then(m=>m.EcommerseModule)
  },
  {
    path:'**',
    redirectTo:'countries'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
