import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByAgeComponent } from './filter-by-age.component';

describe('FilterByAgeComponent', () => {
  let component: FilterByAgeComponent;
  let fixture: ComponentFixture<FilterByAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
