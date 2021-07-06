import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelGaleriaComponent } from './painel-galeria.component';

describe('PainelGaleriaComponent', () => {
  let component: PainelGaleriaComponent;
  let fixture: ComponentFixture<PainelGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelGaleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
