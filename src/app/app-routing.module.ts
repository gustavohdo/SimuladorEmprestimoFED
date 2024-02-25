import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ConclusaoComponent } from './conclusao/conclusao.component';
import { GuardsService } from './guards/guards.service';


const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'conclusao', component: ConclusaoComponent, canActivate: [GuardsService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
