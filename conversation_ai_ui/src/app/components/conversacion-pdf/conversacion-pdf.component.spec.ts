import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversacionPdfComponent } from './conversacion-pdf.component';

describe('ConversacionPdfComponent', () => {
  let component: ConversacionPdfComponent;
  let fixture: ComponentFixture<ConversacionPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversacionPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversacionPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
