import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantFiltersComponent } from './instant-filters.component';

describe('InstantFiltersComponent', () => {
  let component: InstantFiltersComponent;
  let fixture: ComponentFixture<InstantFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstantFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstantFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
