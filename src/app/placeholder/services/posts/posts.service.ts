import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/base.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  protected serverBasePath:string;

  constructor( private http: HttpClient ) { 
    this.serverBasePath = BaseService.apiUrl;
  }

  getPosts() {
    return this.http.get(`${this.serverBasePath}/posts?_limit=10`);
  }

  createPost(postData: { title: string, body: string, userId: number }) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.serverBasePath}/posts`, postData, { headers });
  }

  deletePost(postId: number) {
    return this.http.delete(`${this.serverBasePath}/posts/${postId}`);
  }

  updatePost(postId: number, postData: { title: string, body: string, userId: number }) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.serverBasePath}/posts/${postId}`, postData, { headers });
  }
  
}
