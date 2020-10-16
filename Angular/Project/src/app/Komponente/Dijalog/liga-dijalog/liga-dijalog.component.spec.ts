import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaDijalogComponent } from './liga-dijalog.component';

describe('LigaDijalogComponent', () => {
  let component: LigaDijalogComponent;
  let fixture: ComponentFixture<LigaDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
