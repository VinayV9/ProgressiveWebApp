import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }
  private user = new BehaviorSubject<any>(null);
  cast = this.user.asObservable();
  
  getProfile(data){
    let newUser = {
      username:data.username,
      avtar:data.avtar
    };
    this.user.next(newUser);
  }
}
