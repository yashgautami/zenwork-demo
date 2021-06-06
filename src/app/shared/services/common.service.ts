import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  readonly api_version = 'https://jsonplaceholder.typicode.com/';

  constructor(public http: HttpClient) { }

  getUsers() {
    return this.http.get(this.api_version + 'users');
  }

  getPosts() {
    return this.http.get(this.api_version + 'posts');
  }

}
