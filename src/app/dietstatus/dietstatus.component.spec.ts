import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietstatusComponent } from './dietstatus.component';

describe('DietstatusComponent', () => {
  let component: DietstatusComponent;
  let fixture: ComponentFixture<DietstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
