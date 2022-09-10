import { HomeBottomComponent } from './home-bottom/home-bottom.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreCategoryComponent } from './store-category/store-category.component';
import { StoresComponent } from './stores/stores.component';
import { HomeTopComponent } from './home-top/home-top.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'products' , component: ProductComponent},
  { path: 'stores' , component: StoresComponent},
  { path: 'categories' , component: StoreCategoryComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'service' , component: DeliveryComponent},
  { path: 'footer' , component: FooterComponent},
  { path: 'header' , component: HeaderComponent},
  { path: 'hero' , component: HeroComponent},
  { path: 'home' , component: HomeBottomComponent},
  { path: '**' , component: HomeTopComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents =[StoresComponent, StoreCategoryComponent,AboutComponent,DeliveryComponent,FooterComponent,HeaderComponent,HeroComponent, HomeBottomComponent, HomeTopComponent]

