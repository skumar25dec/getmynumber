import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import { ShoppingCartService } from "../services/shopping-cart.service";






@Injectable()
export class PopulatedCartRouteGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}







/*
@Injectable()
export class PopulatedCartRouteGuard implements CanActivate {
  public constructor(private router: Router,
                     private shoppingCartService: ShoppingCartService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    return new Observable<boolean>((observer: Observer<boolean>) => {
      const cartSubscription = this.shoppingCartService
                                  .get()
                                  .subscribe((cart) => {
                                      if (cart.items.length === 0) {
                                        observer.next(false);
                                        this.router.navigate(["/"]);
                                      } else {
                                        observer.next(true);
                                      }
                                  });
      return () => cartSubscription.unsubscribe();
    });
  }
}*/
