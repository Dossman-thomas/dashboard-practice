import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.checkAuthentication();
  }

  checkAuthentication() {
    const currentUser = localStorage.getItem('currentUser');
    this.isLoggedIn = !!currentUser;
  }
}

