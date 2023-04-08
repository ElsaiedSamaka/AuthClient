/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateTodoComponent } from './create-todo.component';

describe('CreateTodoComponent', () => {
  let component: CreateTodoComponent;
  let fixture: ComponentFixture<CreateTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
