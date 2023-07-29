import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPapaComponent } from './datos-papa.component';

describe('DatosPapaComponent', () => {
  let component: DatosPapaComponent;
  let fixture: ComponentFixture<DatosPapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
