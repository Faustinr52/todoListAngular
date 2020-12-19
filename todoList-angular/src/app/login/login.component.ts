import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
   constructor(public FirebaseService : FirebaseService) { }

  ngOnInit(): void {
  }
  logout(){
    this.FirebaseService.logout()
    this.isLogout.emit()
  }
}
