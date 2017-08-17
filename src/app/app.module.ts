import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CompareComponent } from './components/compare/compare.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { NavComponent } from './components/core/nav/nav.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { SearchComponent }  from './components/search/search.component';



import { AppComponent } from './app.component';
import { appRoutingProvider } from './app.routes';
import { NumService } from './services/app.service';


@NgModule({
  declarations: [
    HomeComponent,
    CompareComponent,
    RegisterationComponent,
    LoginComponent,
    AppComponent,
    NavComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    appRoutingProvider,

  ],
  providers: [NumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
