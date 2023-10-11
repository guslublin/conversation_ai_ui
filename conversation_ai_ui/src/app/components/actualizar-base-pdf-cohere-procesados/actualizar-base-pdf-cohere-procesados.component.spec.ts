import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarBasePdfCohereProcesadosComponent } from './actualizar-base-pdf-cohere-procesados.component';

describe('ActualizarBasePdfCohereProcesadosComponent', () => {
  let component: ActualizarBasePdfCohereProcesadosComponent;
  let fixture: ComponentFixture<ActualizarBasePdfCohereProcesadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarBasePdfCohereProcesadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarBasePdfCohereProcesadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
