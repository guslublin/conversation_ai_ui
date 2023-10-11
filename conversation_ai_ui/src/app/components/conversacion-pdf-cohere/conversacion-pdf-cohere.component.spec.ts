import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversacionPdfCohereComponent } from './conversacion-pdf-cohere.component';

describe('ConversacionPdfCohereComponent', () => {
  let component: ConversacionPdfCohereComponent;
  let fixture: ComponentFixture<ConversacionPdfCohereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversacionPdfCohereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversacionPdfCohereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
