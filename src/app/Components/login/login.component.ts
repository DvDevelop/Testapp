import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	logform: FormGroup;
	constructor(private _Appcomponent: AppComponent, public afAuth: AngularFireAuth, public router: Router) {
		this._Appcomponent.setTitle('Papeleria EBL Log In');
		this.logform = new FormGroup({
			email: new FormControl('', [ Validators.required, Validators.email ]),
			pass: new FormControl('', [ Validators.required, Validators.minLength(6) ])
		});
	}

	ngOnInit() {}

	check() {
		let err: any;
		this.afAuth.auth
			.signInWithEmailAndPassword(this.logform.get('email').value, this.logform.get('pass').value)
			.catch(function(error) {
				Swal.fire({
					title: 'Error',
					text: error.message,
					type: 'error',
					allowOutsideClick: true
				});
			});
		this.afAuth.auth.onAuthStateChanged((user) => {
			if (user) {
				this.router.navigate([ 'home' ]);
			}
		});
	}
}
