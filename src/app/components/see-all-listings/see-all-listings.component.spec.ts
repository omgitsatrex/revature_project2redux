import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllListingsComponent } from './see-all-listings.component';

describe('SeeAllListingsComponent', () => {
  let component: SeeAllListingsComponent;
  let fixture: ComponentFixture<SeeAllListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAllListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAllListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
