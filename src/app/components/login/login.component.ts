import { Component, OnInit, HostBinding } from '@angular/core';
import { Injectable } from '@angular/core';
import { Jsonp, Http,HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {  AuthenticationService } from 'app/services/login.service';
import {  AlertService } from 'app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;

constructor(private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
        ) {}

        ngOnInit() {
              // reset login status
              this.authenticationService.logout();

              // get return url from route parameters or default to '/'
              this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          }


  login() {
  //console.log(this.model.value);
          this.loading = true;
          this.authenticationService.login(this.model.username, this.model.password)
              .subscribe(
                  data => {
                  console.log('subscribe');
                      this.router.navigate(['/cart']);
                  },
                  error => {
                  console.log('error');
                      this.alertService.error(error);
                      this.loading = false;
                  });
      }
   }
