import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarBasePdfProcesadosComponent } from './actualizar-base-pdf-procesados.component';

describe('ActualizarBasePdfProcesadosComponent', () => {
  let component: ActualizarBasePdfProcesadosComponent;
  let fixture: ComponentFixture<ActualizarBasePdfProcesadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarBasePdfProcesadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarBasePdfProcesadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
