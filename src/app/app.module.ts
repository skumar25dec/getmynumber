import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


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


export const firebaseConfig = {
  apiKey: "AIzaSyD2-slA8UrtFa5fNDpdDJZkR14UtrPYses",
  authDomain: "gmnum-3e636.firebaseapp.com",
  databaseURL: "https://gmnum-3e636.firebaseio.com",
  projectId: "gmnum-3e636",
  storageBucket: "gmnum-3e636.appspot.com",
  messagingSenderId: "140006234514"
};

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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [NumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
