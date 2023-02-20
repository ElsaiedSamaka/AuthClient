import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigoutComponent } from './sigout.component';

describe('SigoutComponent', () => {
  let component: SigoutComponent;
  let fixture: ComponentFixture<SigoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
