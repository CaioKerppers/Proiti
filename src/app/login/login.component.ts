import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface LoginResponse {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  senha: string;

  constructor(private http: HttpClient, private router: Router) {
    this.email = '';
    this.senha = '';
  }

  login() {
    const url = 'http://localhost:3000/login';
    const loginData = {
      email: this.email,
      senha: this.senha
    };
    
    this.http.post<LoginResponse>(url, loginData).subscribe(
      (response: LoginResponse) => {
        console.log('Login bem-sucedido!');
        // Armazenar o token de autenticação retornado pelo servidor
        localStorage.setItem('token', response.token);

        // Redirecionar para a página principal ou para a rota desejada
        this.router.navigate(['/servicos']);
      },
      (error: unknown) => {
        console.error('Erro ao fazer login:', error);
        // Lide com o erro de login, como exibir uma mensagem de erro para o usuário
      }
    );
  }
}
