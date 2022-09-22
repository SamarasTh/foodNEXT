import { DataService } from './service/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
// import {  ReactiveFormsModule } from '@angular/forms';
// import {  FormsModule } from '@angular/forms';
=======
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> c85c911d086ba0eb107580f7566f1a5acfdd0ea7

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
<<<<<<< HEAD
=======
    ProductComponent,
    LoginComponent,
>>>>>>> c85c911d086ba0eb107580f7566f1a5acfdd0ea7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
=======
    ReactiveFormsModule
>>>>>>> c85c911d086ba0eb107580f7566f1a5acfdd0ea7
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

