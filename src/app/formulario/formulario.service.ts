import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) { }

  calcularParcelas( valorEmprestimo: number, numeroParcelas: number) {
    console.log(valorEmprestimo, numeroParcelas)
    const params = { valor: valorEmprestimo, parcelas: numeroParcelas };
    const url = 'https://simulador-emprestimo-bff.vercel.app/calcularParcelas';
    return this.http.post(url, params)
  }
}
