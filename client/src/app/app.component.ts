import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '_model/user';
import { AccountService } from '_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The DatingApp';

  constructor( private accountService:AccountService){}

  ngOnInit(){
    this.setCurrentUser();
    
  }

  setCurrentUser(){
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      const user: User = JSON.parse(storedUser);
      this.accountService.setCurrentUser(user);
    } else {
      this.accountService.setCurrentUser(undefined);
    }
  }
}
