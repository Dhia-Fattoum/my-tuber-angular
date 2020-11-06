import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from'@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import { ComponentInformationComponent } from './component-information/component-information.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent, 
    ComponentInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


    AgmCoreModule.forRoot({

      apiKey:"AIzaSyBMXPq1pAxJSH3_qze7WNe_stCAKcjCdlQ"

    })
//AIzaSyD-vPPQ4Y-W_BkFVxdkD1IOg2db-vdx-rM
    // AIzaSyBMXPq1pAxJSH3_qze7WNe_stCAKcjCdlQ
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// apiKey:"AIzaSyD-vPPQ4Y-W_BkFVxdkD1IOg2db-vdx-rM"