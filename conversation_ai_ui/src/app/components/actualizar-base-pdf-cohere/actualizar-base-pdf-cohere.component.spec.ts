import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarBasePdfCohereComponent } from './actualizar-base-pdf-cohere.component';

describe('ActualizarBasePdfCohereComponent', () => {
  let component: ActualizarBasePdfCohereComponent;
  let fixture: ComponentFixture<ActualizarBasePdfCohereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarBasePdfCohereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarBasePdfCohereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
