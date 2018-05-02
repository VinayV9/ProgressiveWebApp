import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  addPost(post){
    return this.http.post<any>('/auth/post', post ,httpOptions);
  }

  getPosts(){
    return this.http.post<any>('/auth/posts',{}, httpOptions);
  }

  updatePost(){

  }

  deletePost(){
    
  }

}
