import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  static apiUrl = 'https://jsonplaceholder.typicode.com'

  constructor() { }
}
