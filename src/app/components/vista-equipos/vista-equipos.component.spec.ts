import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEquiposComponent } from './vista-equipos.component';

describe('VistaEquiposComponent', () => {
  let component: VistaEquiposComponent;
  let fixture: ComponentFixture<VistaEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEquiposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
