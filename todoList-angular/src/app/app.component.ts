import {Component} from '@angular/core';
import { FirebaseService } from './services/firebase.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	public myAngularxQrCode: string = 'My angular app';;
	title = 'angular todo-list';
	isSignedIn = false;
	constructor (public FirebaseService : FirebaseService){}
	ngOnInit(){
		if(localStorage.getItem('user') != null)
			this.isSignedIn = true
			else
			this.isSignedIn = false
	}
	async onSignup(email : string,password: string){
		await this.FirebaseService.signup(email,password)
		if(this.FirebaseService.isLoggedIn)
		this.isSignedIn = true
	}
	async onSignin(email : string,password: string){
		await this.FirebaseService.signin(email,password)
		if(this.FirebaseService.isLoggedIn)
		this.isSignedIn = true
	}
	handleLogout(){
		this.isSignedIn = false
	}
}