/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrickeryComponent } from './trickery.component';

describe('TrickeryComponent', () => {
  let component: TrickeryComponent;
  let fixture: ComponentFixture<TrickeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrickeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrickeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
