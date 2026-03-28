import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RideServices {
  private apiUrl = 'http://localhost:5118/api/rides';

  constructor( private http: HttpClient){}

  getRides(){
    return this.http.get(this.apiUrl);
  }
}
