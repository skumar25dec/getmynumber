import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LoginComponent } from './components/login/login.component';
import { CompareComponent } from './components/compare/compare.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { OrderConfirmationComponent } from "./components/order-confirmation/order-confirmation.component";
import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { PopulatedCartRouteGuard } from "./route-gaurds/populated-cart.route-gaurd";

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {
                canActivate: [PopulatedCartRouteGuard],
                component: CheckoutComponent,
                path: "checkout"
            },
            {
                canActivate: [PopulatedCartRouteGuard],
                component: OrderConfirmationComponent,
                path: "confirmed"
            },
            {
                component: StoreFrontComponent,
                path: "cart"
            },
            {
                component: LoginComponent,
                path: "login"
            },
            {
                component: CompareComponent,
                path: "compare"
            },
            {
                component: RegisterationComponent,
                path: "register"
            },
            {
                component: SearchComponent,
                path: "search"
            },
            {
                component: HomeComponent,
                path: "**"
            }])
    ]
})
export class AppRoutingModule { }
