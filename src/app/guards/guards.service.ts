import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardsService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const confirmado = sessionStorage.getItem('confirmado');
    if (confirmado === 'true') {
      return true; 
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
