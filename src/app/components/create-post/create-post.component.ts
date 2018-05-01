import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private postSvc: PostService) { }

  ngOnInit() {
  }
  post = {
    data:''
  }
  addPost(){
    this.postSvc.addPost(this.post)
    .subscribe(
        data => {
          console.log("post saved")
        },
        error => {
            console.log(error);
    });
  }
}
