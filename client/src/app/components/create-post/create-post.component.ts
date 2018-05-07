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
    if (!navigator.onLine) {
      this.button.disabled = true;
    }
  }
  post = {
    data:''
  }

  button = {
    disabled: false
  }
  addPost(){
    if(!this.post) return;
    this.postSvc.addPost(this.post)
    .subscribe(
        data => {
          //TODO alert service
          console.log("post saved");
          this.post.data = "";
        },
        error => {
          //TODO alert service
          console.log(error);
    });
   
  }
}

