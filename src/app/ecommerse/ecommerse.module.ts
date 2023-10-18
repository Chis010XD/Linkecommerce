import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalPageComponent } from './pages/capital-page/capital-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { EcommerceRoutingModuleModule } from './ecommerce-routing-module.module';
import { LinkEcommerceModule } from '../link-ecommerce/link-ecommerce.module';
import { DetallePaginaComponent } from './pages/detalle-pagina/detalle-pagina.component';



@NgModule({
  declarations: [
    CapitalPageComponent,
    CountryPageComponent,
    RegionPageComponent,
    DetallePaginaComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModuleModule,
    LinkEcommerceModule
  ]
})
export class EcommerseModule { }
