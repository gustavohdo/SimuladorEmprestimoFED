import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';

import { FormularioService } from './formulario.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let formularioServiceSpy: jasmine.SpyObj<FormularioService>;

  beforeEach(async () => {
    const formularioServiceSpyObj = jasmine.createSpyObj('FormularioService', ['calcularParcelas']);

    await TestBed.configureTestingModule({
      declarations: [ FormularioComponent ],
      imports: [ FormsModule, RouterTestingModule ],
      providers: [
        { provide: FormularioService, useValue: formularioServiceSpyObj }
      ]
    })
    .compileComponents();

    formularioServiceSpy = TestBed.inject(FormularioService) as jasmine.SpyObj<FormularioService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Dado que acesse a página inicial, então o formulário deve ser carregado', () => {
    expect(component).toBeTruthy();
  });

  it('Dado queo formulário é enviado, então o método calcularParcelas deve ser chamado, atualizando os valores', () => {

    component.formData = {
      nome: 'Nome fictício',
      valorEmprestimo: 100000,
      numeroParcelas: 12
    };

    const mockResponse = {
      valorParcela: 8750,
      valorTotal: 105000,
      parcelas: 12
    };

    formularioServiceSpy.calcularParcelas.and.returnValue(of(mockResponse));

    component.submitForm();

    expect(formularioServiceSpy.calcularParcelas).toHaveBeenCalledWith(100000, 12);
    expect(component.valorParcela).toBe(8750);
    expect(component.valorTotal).toBe(105000);
    expect(component.parcelas).toBe(12);
    expect(component.confirmar).toBe(true);
    expect(component.resumo).toBe(true);
  });

  
  it('Dado que o método resume seja disparado, então o estado de exibição do popup deve ser alternado', () => {

    component.resume();
   
    expect(component.showPopup).toBe(true);
  });
});