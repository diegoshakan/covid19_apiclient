import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCountryComponent } from './show-country.component';

describe('ShowCountryComponent', () => {
  let component: ShowCountryComponent;
  let fixture: ComponentFixture<ShowCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
