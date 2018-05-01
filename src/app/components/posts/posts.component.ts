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
  }
  posts = [
    
      {
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        paragraph: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        title: "Shiba Inu",
        subTitle: "Dog Breed",
        like:false
      },
      {
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        paragraph: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        title: "Shiba Inu",
        subTitle: "Dog Breed",
        like:false
      },
      {
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        paragraph: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        title: "Shiba Inu",
        subTitle: "Dog Breed",
        like:false
      },
      {
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        paragraph: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        title: "Shiba Inu",
        subTitle: "Dog Breed",
        like:false
      },
      {
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        paragraph: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        title: "Shiba Inu",
        subTitle: "Dog Breed",
        like:false
      },
      {
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        paragraph: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        title: "Shiba Inu",
        subTitle: "Dog Breed",
        like:false
      },
      {
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        paragraph: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        title: "Shiba Inu",
        subTitle: "Dog Breed",
        like:false
      },
      {
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        paragraph: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        title: "Shiba Inu",
        subTitle: "Dog Breed",
        like:false
      },
      {
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        paragraph: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        title: "Shiba Inu",
        subTitle: "Dog Breed",
        like:false
      }
   
  ];

  liked(like){
    console.log(like);
    return !like;
  };

  getPosts() {
    this.postSvc.getPosts()
      .subscribe(
        data => {
          console.log(data);
          this.posts = data
        },
        error => {
          console.log(error);
        });
  };


   
}
