import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseNotificationComponent } from './response-notification.component';

describe('ResponseNotificationComponent', () => {
  let component: ResponseNotificationComponent;
  let fixture: ComponentFixture<ResponseNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
