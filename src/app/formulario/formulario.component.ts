import { Component, OnInit } from '@angular/core';
import { FormularioService } from './formulario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private formularioService: FormularioService, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }


  showPopup: boolean = false;
  confirmar: boolean = false;
  resumo: boolean = false;
  valorTotal: number;
  parcelas: number;
  valorParcela: number;

  formData = {
    nome: '',
    valorEmprestimo: null,
    numeroParcelas: null
  };

  submitForm(){

    this.formularioService.
    calcularParcelas(this.formData.valorEmprestimo, this.formData.numeroParcelas).
    subscribe((results) => {
      this.valorParcela = (results as any).valorParcela;
      this.valorTotal = (results as any).valorTotal;
      this.parcelas = (results as any).parcelas;

      this.confirmar = true;
      this.resumo = true;
    });
    
  }

  confirm() {
    sessionStorage.setItem('confirmado', 'true');

    let data = {
      valorTotal: this.valorTotal,
      parcelas: this.parcelas,
      valorParcela: this.valorParcela,
      valorEmprestimo: this.formData.valorEmprestimo
    };

    this.router.navigate(['/conclusao'], { queryParams: data });
    this.showPopup = false;
  }

  cancel() {
    this.showPopup = false;
  }

  resume() {
    this.showPopup = true;
  }
}
