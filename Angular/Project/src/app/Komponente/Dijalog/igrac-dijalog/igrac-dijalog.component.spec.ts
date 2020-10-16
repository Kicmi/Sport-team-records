import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgracDijalogComponent } from './igrac-dijalog.component';

describe('IgracDijalogComponent', () => {
  let component: IgracDijalogComponent;
  let fixture: ComponentFixture<IgracDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgracDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgracDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
