import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Adicione esta linha para definir o arquivo HTML do componente
  styleUrls: ['./app.component.css'] // Adicione esta linha para definir o arquivo CSS do componente
})
export class AppComponent {
  title = 'Aparelhos Fisio';

  constructor(private router: Router) {}

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }
}
