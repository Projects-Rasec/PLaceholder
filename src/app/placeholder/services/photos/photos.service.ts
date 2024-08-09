import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  protected basePathService: string;

  constructor( private http: HttpClient) { 
    this.basePathService = BaseService.apiUrl;
  }

  getPhotos() {
    return this.http.get(`${this.basePathService}/photos?_limit=20`);
  }
}
