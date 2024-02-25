import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conclusao',
  templateUrl: './conclusao.component.html',
  styleUrls: ['./conclusao.component.scss']
})
export class ConclusaoComponent implements OnInit {

  valorTotal: number;
  parcelas: number;
  valorParcela: number;
  valorEmprestimo: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      valorTotal: number;
      parcelas: number;
      valorParcela: number;
      valorEmprestimo: number;
    };

    this.valorTotal = parseFloat(sessionStorage.getItem('valorTotal'));
    this.parcelas = parseFloat(sessionStorage.getItem('parcelas'));
    this.valorParcela = parseFloat(sessionStorage.getItem('valorParcela'));
    this.valorEmprestimo = parseFloat(sessionStorage.getItem('valorEmprestimo'));
}
  voltar(){
    this.router.navigate(['/']);
  }
}
