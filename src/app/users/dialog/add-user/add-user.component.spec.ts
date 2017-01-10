/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { AddUserComponent } from './add-user.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import {OverlayContainer} from '@angular/material/core';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  console.log('-------')
  console.log('NEW TEST', OverlayContainer)

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddUserComponent
      ],
      imports: [
        MaterialModule.forRoot(),
      
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
