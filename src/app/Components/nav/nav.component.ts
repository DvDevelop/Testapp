import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { Usermodel } from '../../models/user.model';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: [ './nav.component.css' ]
})
export class NavComponent implements OnInit {
	id: any;
	user: Usermodel = new Usermodel();
	constructor(private auth: AngularFireAuth, public router: Router, private userservice: UserService) {
		this.auth.auth.onAuthStateChanged((user) => {
			if (user) {
				this.id = user.uid;
				//console.log(this.id);
				this.userservice.getUser(this.id).subscribe((resp: Usermodel) => {
					this.user = resp;
				});
				//console.log(this.user);
			}
		});
	}

	ngOnInit() {
		this.auth.auth.onAuthStateChanged((user) => {
			if (user) {
				this.id = user.uid;
				//console.log(this.id);
				this.userservice.getUser(this.id).subscribe((resp: Usermodel) => {
					this.user = resp;
				});
				//console.log(this.user);
			}
		});
	}

	logout() {
		this.auth.auth
			.signOut()
			.then(function() {
				// Sign-out successful.
				//console.log("salio");
				window.location.reload();
			})
			.catch(function(error) {
				// An error happened.
			});
	}
}
