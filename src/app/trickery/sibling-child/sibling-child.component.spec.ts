/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SiblingChildComponent } from './sibling-child.component';

describe('SiblingChildComponent', () => {
  let component: SiblingChildComponent;
  let fixture: ComponentFixture<SiblingChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiblingChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
