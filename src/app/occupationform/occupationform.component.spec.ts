import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationformComponent } from './occupationform.component';

describe('OccupationformComponent', () => {
  let component: OccupationformComponent;
  let fixture: ComponentFixture<OccupationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
