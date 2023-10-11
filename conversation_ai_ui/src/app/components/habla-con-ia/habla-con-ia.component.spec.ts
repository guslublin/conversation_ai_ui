import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HablaConIaComponent } from './habla-con-ia.component';

describe('HablaConIaComponent', () => {
  let component: HablaConIaComponent;
  let fixture: ComponentFixture<HablaConIaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HablaConIaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HablaConIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
