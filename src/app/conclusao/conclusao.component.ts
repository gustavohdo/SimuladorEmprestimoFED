import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.valorTotal = params['valorTotal'];
      this.parcelas = params['parcelas'];
      this.valorParcela = params['valorParcela'];
      this.valorEmprestimo = params['valorEmprestimo'];
    });
}

  voltar(){
    this.router.navigate(['/']);
  }
}
