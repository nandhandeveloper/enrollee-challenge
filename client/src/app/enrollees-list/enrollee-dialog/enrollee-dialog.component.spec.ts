import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleeDialogComponent } from './enrollee-dialog.component';

describe('EnrolleeDialogComponent', () => {
  let component: EnrolleeDialogComponent;
  let fixture: ComponentFixture<EnrolleeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolleeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
