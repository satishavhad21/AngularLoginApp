import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }
   private url:string='http://localhost:5050';

   
    login(email: string, password: string) {
        return this.http.post<any>(`${this.url}/users/login`, 
        { email: email, password: password },
        { headers: new HttpHeaders({'Content-Type': 'application/json'})})
            
    }

    register(email: string, password: string) {
        return this.http.post<any>(`${this.url}/users/signup`, 
        { email: email, password: password },
        { headers: new HttpHeaders({'Content-Type': 'application/json'})})
  }    

}
