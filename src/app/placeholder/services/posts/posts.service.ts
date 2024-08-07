import { HttpClient } from '@angular/common/http';
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
    return this.http.get(`${this.serverBasePath}/posts`);
  }
  
}
