// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { AparelhosComponent } from './aparelhos/aparelhos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
//import { environment } from '../enviroments/enviroment'; 

@NgModule({
  declarations: [
    AppComponent,
    AparelhosComponent,
    ServicosComponent,
    SobreComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthGuard,
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
