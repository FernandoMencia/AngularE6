import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { FormsModule } from '@angular/forms';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial values as zero in  variables', () => {
    expect(component.numero1).toBe(0);
    expect(component.numero2).toBe(0);
    expect(component.resultado).toBe(0);
  });
  
  it('should display initial values as zero in the HTML', () => {
  const compiled = fixture.nativeElement;

  const inputs = compiled.querySelectorAll('input[type="number"]');
  const resultadoDisplay = compiled.querySelector('h3');

  expect(inputs[0].value).toBe('0');
  expect(inputs[1].value).toBe('0');
  expect(resultadoDisplay.textContent).toContain('Resultado: 0');
  });

});
