import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = "https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users";
  constructor(private http: HttpClient) { }

  getUserDetails(){
    return this.http.get(this.userUrl);
  }

  postUserDetail(payload: any){
    return this.http.post(this.userUrl, payload)
  }
}
