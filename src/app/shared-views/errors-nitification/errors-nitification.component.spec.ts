import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsNitificationComponent } from './errors-nitification.component';

describe('ErrorsNitificationComponent', () => {
  let component: ErrorsNitificationComponent;
  let fixture: ComponentFixture<ErrorsNitificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsNitificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsNitificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
