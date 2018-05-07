import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router,
    public authSvc: AuthService,
    private userSvc: UserService
  ) { }

  ngOnInit() {
    this.userSvc.cast.subscribe(user => this.user = user); 
  }
  
  user:any={};

  navigate(path){
    this.router.navigate([path])
  }
}
