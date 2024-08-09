import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  posts:any[] = [];
  createPost = { title: '', body: '', userId: 1 };
  updatePost = { id: 0, title: '', body: '', userId: 1 };
  deletePostId = { id: 0 };
  response:any;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts:any) => {
      this.posts = posts;
    });
  }

  submitCreatePost():void {
    this.postsService.createPost(this.createPost).subscribe(response => {
      this.response = response;
    })
  }

  deletePost(postId:number):void {
    this.postsService.deletePost(postId).subscribe(response => {
      this.response = response;
    });
  }

  submitUpdatePost(postId:number):void {
    this.postsService.updatePost(postId, this.updatePost).subscribe(response => {
      this.response = response;
    });
  }

}
