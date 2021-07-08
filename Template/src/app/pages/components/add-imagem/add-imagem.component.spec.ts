/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddImagemComponent } from './add-imagem.component';

describe('AddImagemComponent', () => {
  let component: AddImagemComponent;
  let fixture: ComponentFixture<AddImagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
