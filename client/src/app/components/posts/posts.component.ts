import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postSvc: PostService) { }
  
  ngOnInit() {
    this.getPosts();
  }
  
  posts = [];
  
  getPosts() {
    this.postSvc.getPosts()
      .subscribe(
        data => {
          this.posts = data.reverse();
        },
        error => {
          console.log(error);
        });
  }
   
}


//  posts = [{
  //    data: "hello abbai ela nav cjdncns cdshicndsncn cidsncisnd dncisdnv dcdaivnsd dsihcds dindk cidincc eo c eo vemcdm cmdocmd ocnd ocndncd cndcned cnd ncoe vcodnco ocnoc d vdvod  d",
  //    created_at:"2018-05-04T18:26:10.776Z",
  //    userId:{
  //      username:"vinay",
  //      avtar:"https://secure.gravatar.com/avatar/9388a75eb977e64c4f51330925df0d8d?s=64"
  //    }
  //  }];