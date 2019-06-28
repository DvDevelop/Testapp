import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../Services/user.service';
import { Usermodel } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-singup',
	templateUrl: './singup.component.html',
	styleUrls: [ './singup.component.css' ]
})
export class SingupComponent implements OnInit {
	logform: FormGroup;
	user: Usermodel = new Usermodel();
	constructor(
		private _Appcomponent: AppComponent,
		private afAuth: AngularFireAuth,
		public router: Router,
		private userservice: UserService
	) {
		this._Appcomponent.setTitle('Papeleria EBL Sing Up');
		this.logform = new FormGroup({
			username: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
			usermail: new FormControl('', [ Validators.required, Validators.email ]),
			password: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
			secpass: new FormControl('', [ Validators.required, Validators.minLength(6) ])
		});
	}

	ngOnInit() {}

	check() {
		if (this.logform.get('password').value == this.logform.get('secpass').value) {
			//console.log('contraceñas iguales');
			this.afAuth.auth
				.createUserWithEmailAndPassword(this.logform.get('usermail').value, this.logform.get('password').value)
				.catch(function(error) {
					//console.log(error.message);
					Swal.fire({
						title: 'Error',
						text: error.message,
						type: 'error',
						allowOutsideClick: true
					});
				});
			this.afAuth.auth.onAuthStateChanged((user) => {
				if (user) {
					this.user.usermail = this.logform.get('usermail').value;
					this.user.list = [ ' ' ];
					this.user.id = user.uid;
					this.user.username = this.logform.get('username').value;
					this.userservice.createUser(this.user).subscribe((resp) => {
						console.log(resp);
					});
					user
						.sendEmailVerification()
						.then(function() {
							Swal.fire({
								title: 'info',
								text: 'Email de verificacion enviado, por favor verifique su e mail e ingrese despues',
								type: 'info',
								allowOutsideClick: true
							});
						})
						.catch(function(error) {
							Swal.fire({
								title: 'error',
								text: error,
								type: 'error',
								allowOutsideClick: true
							});
						});
					//console.log('aqui vamos');
					this.router.navigate([ 'home' ]);
				}
			});
		} else {
			Swal.fire({
				title: 'Error',
				text: 'Contraceñas no corresponden',
				type: 'error',
				allowOutsideClick: true
			});
		}
	}
}
