/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SharedInputlabelComponent } from './shared-inputlabel.component';

describe('SharedInputlabelComponent', () => {
  let component: SharedInputlabelComponent;
  let fixture: ComponentFixture<SharedInputlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedInputlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedInputlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
