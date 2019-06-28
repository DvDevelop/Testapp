import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usermodel } from 'src/app/models/user.model';
import { UserService } from '../../Services/user.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	id: any;
	user: Usermodel = new Usermodel();
	constructor(private _Appcomponent: AppComponent, private auth: AngularFireAuth, private userservice: UserService) {
		this._Appcomponent.setTitle('Papeleria EBL Home');
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
				//console.log(this.id);
				this.userservice.getUser(this.id).subscribe((resp: Usermodel) => {
					this.user = resp;
				});
				//console.log(this.user);
			}
		});
	}
}
