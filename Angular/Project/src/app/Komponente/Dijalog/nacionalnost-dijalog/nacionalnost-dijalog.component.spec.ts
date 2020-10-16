import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalnostDijalogComponent } from './nacionalnost-dijalog.component';

describe('NacionalnostDijalogComponent', () => {
  let component: NacionalnostDijalogComponent;
  let fixture: ComponentFixture<NacionalnostDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacionalnostDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalnostDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
