import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SingupComponent } from './Components/singup/singup.component';
import { HttpClientModule } from '@angular/common/http';
//FIREBASE//
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AcercadeComponent } from './Components/acercade/acercade.component';
import { TermsComponent } from './Components/terms/terms.component';

export const firebaseconfig = {
	apiKey: 'AIzaSyAlk8z_IF5tNSKNlHV2OP5xqxpxH7FLAHg',
	authDomain: 'testapp-b3579.firebaseapp.com',
	databaseURL: 'https://testapp-b3579.firebaseio.com',
	projectId: 'testapp-b3579',
	storageBucket: 'testapp-b3579.appspot.com',
	messagingSenderId: '114024617474',
	appId: '1:114024617474:web:dcba6e7f81a22cf6'
};

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		BodyComponent,
		FooterComponent,
		HomeComponent,
		LoginComponent,
		SingupComponent,
		AcercadeComponent,
		TermsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(firebaseconfig),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		HttpClientModule
	],
	providers: [ Title ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
