import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	public myAngularxQrCode: string = null;
	constructor () {
	  this.myAngularxQrCode = 'Your QR code data string';
	}
}