/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DCSComponent } from './dcs.component';

describe('DCSComponent', () => {
  let component: DCSComponent;
  let fixture: ComponentFixture<DCSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
