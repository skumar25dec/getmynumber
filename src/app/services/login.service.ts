import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
      console.log('login method');
        return this.http.get('http://gmncrm.scideas.in/service/v4_1/rest.php?callback=JSON_CALLBACK&method=login&input_type=JSON&response_type=JSON&rest_data={"user_auth":{"user_name":"admin","password":"10a40686069ba8f169948c283a3369ca","version":"1"},"application_name":"RestTest","name_value_list":[]}')
        .toPromise()
        .then(response => function(){console.log('reponse');});

            /*.map((response: Response) => {
              console.log(JSON.stringify(response));
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });*/
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
