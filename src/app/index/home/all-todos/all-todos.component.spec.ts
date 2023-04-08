/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllTodosComponent } from './all-todos.component';

describe('AllTodosComponent', () => {
  let component: AllTodosComponent;
  let fixture: ComponentFixture<AllTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
