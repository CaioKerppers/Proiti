// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthToken } from './auth.token.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Altere para a URL correta da sua API

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthToken> {
    const url = `${this.apiUrl}/login`;
    const loginData = {
      username: username,
      password: password,
    };

    // Usando o HttpClient para fazer a chamada POST para a API de login
    return this.http.post<AuthToken>(url, loginData);
  }

  verificarAutenticacao(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Retorna true se o token existir, caso contrário, retorna false
  }

  armazenarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    // Limpar dados de autenticação, por exemplo, token do localStorage ou do cookie
    localStorage.removeItem('token');
  }
}
