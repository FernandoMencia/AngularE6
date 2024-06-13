import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { CalculadoraComponent } from './calculadora/calculadora.component';

import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CalculadoraComponent
      ],
      imports: [ FormsModule ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'entrega6'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('entrega6');
  });

  
});
