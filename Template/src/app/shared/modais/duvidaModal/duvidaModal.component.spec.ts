/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DuvidaModalComponent } from './duvidaModal.component';

describe('DuvidaModalComponent', () => {
  let component: DuvidaModalComponent;
  let fixture: ComponentFixture<DuvidaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuvidaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuvidaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
