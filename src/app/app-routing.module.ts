import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreCategoryComponent } from './store-category/store-category.component';
import { StoresComponent } from './stores/stores.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'products/:storeId' , component: ProductComponent},
  { path: 'stores/:storeCategoryId' , component: StoresComponent},
  { path: 'shopping-cart' , component: ShoppingCartComponent},
  { path: 'categories' , component: StoreCategoryComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'service' , component: DeliveryComponent},
  { path: 'footer' , component: FooterComponent},
  { path: 'header' , component: HeaderComponent},
  { path: 'hero' , component: HeroComponent},
  { path: 'home' , component: HomeComponent},
  { path: '' , component: HomeComponent},
  { path: '**', component: LoginComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
export const  routingComponents =[StoresComponent,ShoppingCartComponent, StoreCategoryComponent,AboutComponent,DeliveryComponent,FooterComponent,HeaderComponent,HeroComponent, HomeComponent, ProductComponent]
=======
export const  routingComponents =[StoresComponent,ShoppingCartComponent, StoreCategoryComponent,AboutComponent,DeliveryComponent,FooterComponent,HeaderComponent,HeroComponent, HomeComponent, LoginComponent]
>>>>>>> c85c911d086ba0eb107580f7566f1a5acfdd0ea7

