import { TestBed } from '@angular/core/testing';

import { FormularioService } from './formulario.service';

describe('FormularioService', () => {
  let service: FormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioService);
  });

  it('Dado que a aplicação está rodando, então o serviço de formulário deve ser criados', () => {
    expect(service).toBeTruthy();
  });
});
