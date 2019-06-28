import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SingupComponent } from './Components/singup/singup.component';
import { AcercadeComponent } from './Components/acercade/acercade.component';
import { TermsComponent } from './Components/terms/terms.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'singup', component: SingupComponent },
	{ path: 'acercade', component: AcercadeComponent },
	{ path: 'terms', component: TermsComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
