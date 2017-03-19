/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpecresultComponent } from './specresult.component';

describe('SpecresultComponent', () => {
  let component: SpecresultComponent;
  let fixture: ComponentFixture<SpecresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
