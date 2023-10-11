import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarBasePdfComponent } from './actualizar-base-pdf.component';

describe('ActualizarBasePdfComponent', () => {
  let component: ActualizarBasePdfComponent;
  let fixture: ComponentFixture<ActualizarBasePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarBasePdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarBasePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
