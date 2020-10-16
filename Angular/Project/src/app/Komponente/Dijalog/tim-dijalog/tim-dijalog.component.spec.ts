import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimDijalogComponent } from './tim-dijalog.component';

describe('TimDijalogComponent', () => {
  let component: TimDijalogComponent;
  let fixture: ComponentFixture<TimDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
