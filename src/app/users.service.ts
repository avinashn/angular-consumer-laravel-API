import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './users';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})

export class UsersService {

	apiURL: string = 'https://demos.justlaravel.com/integrate-passport-laravel-api';

  	constructor(private http: HttpClient) { }

    public getUsers(access_token){

	    let myheader = new HttpHeaders({

	      Authorization: 'Bearer ' + access_token 

	  	});

	    return this.http.get<User[]>(`${this.apiURL}/api/users`, {headers: myheader});

	}

	public getAccess(){

		let params = new HttpParams();

		params = params.set('client_id', '76');
		params = params.set('client_secret', 'fKYSZcJu0a13xQ8pB4ycRpbiwcEGXz5Tp3n6rHc5');
		params = params.set('grant_type', 'password');
		params = params.set('username', 'n.ethalaavinash94@gmail.com');
		params = params.set('password', '111111');
		params = params.set('scope', '*');

	    return this.http.post(`${this.apiURL}/oauth/token/`,params);

	}

}