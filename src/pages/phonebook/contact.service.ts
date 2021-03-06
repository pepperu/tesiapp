import { Injectable } from '@angular/core';

// Import http module
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {

  constructor(private _http: HttpClient) { }

  getContacts()  {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

}