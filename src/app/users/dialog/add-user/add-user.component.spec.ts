/* tslint:disable:no-unused-variable */
import {} from 'jasmine';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { AddUserComponent } from './add-user.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormsModule }   from '@angular/forms';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
//   let dialogRef: MdDialogRef<AddUserComponent>;
//
console.log('---- NEW TEST ROUND ---')
// console.log('COMPONENT:')
// console.log(AddUserComponent)
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddUserComponent
      ],
      imports: [
        MaterialModule.forRoot(),
        FormsModule
      ],
      providers: [

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
