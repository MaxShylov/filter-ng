import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByCityComponent } from './filter-by-city.component';

describe('FilterByCityComponent', () => {
  let component: FilterByCityComponent;
  let fixture: ComponentFixture<FilterByCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
