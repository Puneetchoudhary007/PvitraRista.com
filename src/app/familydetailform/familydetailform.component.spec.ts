import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilydetailformComponent } from './familydetailform.component';

describe('FamilydetailformComponent', () => {
  let component: FamilydetailformComponent;
  let fixture: ComponentFixture<FamilydetailformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilydetailformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilydetailformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
