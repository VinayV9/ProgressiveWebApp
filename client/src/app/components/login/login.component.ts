import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { Router} from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(
    private loginSvc: AuthService,
    private router: Router,
    private userSvc: UserService
  ) { }
  
  ngOnInit() {
  }
  hide = true;
  login(){
    this.loginSvc.login(this.user)
    .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/create']);
          this.userSvc.getProfile(data);
        },
        error => {
          //TODO: alert service
          console.log('err: ',error);
        }
  );  
  }
}
