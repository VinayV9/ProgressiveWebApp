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

  liked(like){
    console.log(like);
    return !like;
  }

  getPosts() {
    this.postSvc.getPosts()
      .subscribe(
        data => {
          this.posts = data;
        },
        error => {
          console.log(error);
        });
  }
   
}
