import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthData } from './auth-data.model';

const BACKEND_URL = environment.apiUrl + '/user/';


@Injectable({providedIn: 'root'})
export class AuthService {
  private userId: string;
  private pseudo: string;
  private authStatusListener = new Subject<boolean>();

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  private static saveAuthData(userId: string, pseudo: string): any {
    localStorage.setItem('userId', userId);
    localStorage.setItem('pseudo', pseudo);
  }

  createUser(pseudo: string, email: string, password: string): object {
    const authData: AuthData = { pseudo, email, password };
    return this.httpClient
      .post(BACKEND_URL + '/signup', authData).subscribe(() => {
        this.router.navigate(['/']);
      }, error => {
        this.authStatusListener.next(false);
    });
  }

  login(email: string, password: string): any {
    const authData: AuthData = { email, password };
    this.httpClient
      .post<{ userId: string, pseudo: string }>
      (BACKEND_URL + '/login', authData)
      .subscribe((response) => {
        this.userId = response.userId;
        this.pseudo = response.pseudo;
        this.authStatusListener.next(true);
        AuthService.saveAuthData(this.userId, this.pseudo);
        this.router.navigate(['/']);
      }, error => {
        this.authStatusListener.next(false);
      });
    console.log('login should be ok.. redirect homepage');
    console.log(this.pseudo);
  }
}
