import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesComponent } from './rides-component';

describe('RidesComponent', () => {
  let component: RidesComponent;
  let fixture: ComponentFixture<RidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RidesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
