import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/usuarios/model/usuario.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // URL API WEB
  endpoint = environment.baseUrl + "/auth";

  // INJEÇÃO DE DEPENDÊNCIA
  constructor(private httpClient: HttpClient) { }

  // AUTENTICAR
  autenticar(usuario: Usuario){
    return this.httpClient.post(this.endpoint, usuario);

  }
}
