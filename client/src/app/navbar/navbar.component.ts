import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '_services/account.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {}
  @Input() curentUser: any;

  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(response =>{
      console.log(response);
    }, error =>{
      console.log(error);
    });
  };

  logout(){
    this.accountService.logout();
  }

}
