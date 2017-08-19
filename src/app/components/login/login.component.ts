import { Component, OnInit, HostBinding } from '@angular/core';
import { Injectable } from '@angular/core';
import { Jsonp, Http,HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

//import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
user: Observable<firebase.User>;
  state: string = '';
   error: any;

//body:{"user_auth":{"user_name":"admin","password":"21232f297a57a5a743894a0e4a801fc3","version":"1"},"application_name":"RestTest"};


constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase,private router: Router) {

 this.user = afAuth.authState;

}


onSubmit(formData) {
   if(formData.valid) {
     console.log(formData.value);
     this.afAuth.auth.signInWithEmailAndPassword(
       formData.value.username,
       formData.value.password
     ).then(
       (success) => {
       console.log(success);
       this.router.navigate(['/compare']);
     }).catch(
       (err) => {
       console.log('err1' + formData.value.email);
       console.log(err);
       this.error = err;
     })
   }
 }






login(username,password) {

this.afAuth.auth.signInWithEmailAndPassword(username, password).catch(function(error) {
  // Handle Errors here.
  //var errorCode = error.code;
//  this.msgVal = error.message;
  // ...
});;
  //  this.afAuth.auth.signInAnonymously();
}

logout() {
    this.afAuth.auth.signOut();
}

Send(desc: string) {
}

  ngOnInit() {
  }
  haha(){
//  http
  //.post('/api/developers/add', body).subscribe(...);
  }
   }
