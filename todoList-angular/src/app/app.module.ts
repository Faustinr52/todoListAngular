import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from '@angular/fire';

import {TodoComponent} from './todo/todo.component';
import {TodoService} from './todo.service';
import {AppComponent} from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { LoginComponent } from './login/login.component';
import { FirebaseService } from './services/firebase.service';


const routes: Routes = [
	{path: '', component: TodoComponent, pathMatch: 'full'},
	{path: ':filter', component: TodoComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		TodoComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		QRCodeModule,
		FormsModule,
		RouterModule.forRoot(routes, {useHash: true}),
		AngularFireModule.initializeApp({
    apiKey: "AIzaSyA2E_222fWesicke1AUBISc_TIR0GHNm1U",
    authDomain: "projet-angular-45102.firebaseapp.com",
    projectId: "projet-angular-45102",
    storageBucket: "projet-angular-45102.appspot.com",
    messagingSenderId: "989469479073",
    appId: "1:989469479073:web:88e67514df62cfdc3820e0"
  }),
	],
	providers: [TodoService,FirebaseService],
	bootstrap: [AppComponent]
})
export class AppModule {}
