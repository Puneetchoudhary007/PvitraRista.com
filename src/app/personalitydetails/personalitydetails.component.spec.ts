import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalitydetailsComponent } from './personalitydetails.component';

describe('PersonalitydetailsComponent', () => {
  let component: PersonalitydetailsComponent;
  let fixture: ComponentFixture<PersonalitydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalitydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalitydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
