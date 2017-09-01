import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { ModuleWithProviders } from '@angular/core';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CompareComponent } from './components/compare/compare.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { NavComponent } from './components/core/nav/nav.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { SearchComponent }  from './components/search/search.component';
import { NumService } from './services/app.service';
import { UserService } from './services/user.service';

//for fake backend

import { fakeBackendProvider } from './components/login/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


//cart

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { OrderConfirmationComponent } from "./components/order-confirmation/order-confirmation.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { PopulatedCartRouteGuard } from "./route-gaurds/populated-cart.route-gaurd";
import { DeliveryOptionsDataService } from "./services/delivery-options.service";
import { ProductsDataService } from "./services/products.service";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { LocalStorageServie, StorageService } from "./services/storage.service";
//auth service
import { AuthenticationService } from "./services/login.service";
import { AlertService } from "./services/alert.service";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    HomeComponent,
    CompareComponent,
    RegisterationComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    SearchComponent,

    AppComponent,
    ShoppingCartComponent,
    StoreFrontComponent,
    CheckoutComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NumService,
    ProductsDataService,
    DeliveryOptionsDataService,
    PopulatedCartRouteGuard,
    LocalStorageServie,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    AuthenticationService,
    AlertService,
    UserService,
    { provide: StorageService, useClass: LocalStorageServie },
    {
      deps: [StorageService, ProductsDataService, DeliveryOptionsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ]
})
export class AppModule { }
