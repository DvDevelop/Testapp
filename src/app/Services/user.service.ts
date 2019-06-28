import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usermodel } from '../models/user.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private url = 'https://testapp-b3579.firebaseio.com';
	constructor(private http: HttpClient) {}

	createUser(user: Usermodel) {
		//console.log(user.id);
		return this.http.put(`${this.url}/usuarios/${user.id}.json`, user);
	}

	getUser(id: string) {
		return this.http.get(`${this.url}/usuarios/${id}.json`);
	}
}
