import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  private apiUrl = 'https://fakestoreapi.com/auth/login';  
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('authToken');
    this.currentUserSubject = new BehaviorSubject<any>(storedUser ? storedUser : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(this.apiUrl, body).pipe(
      map((response) => {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userName', username);
        this.currentUserSubject.next(response); 
        return response;
      })
    );
  }

  logout() {
    // Remove user from local storage to log user out
    localStorage.removeItem('authToken');
    this.currentUserSubject.next(null); // Update BehaviorSubject with null
  }

}