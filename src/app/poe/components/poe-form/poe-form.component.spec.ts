import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoeFormComponent } from './poe-form.component';

describe('PoeFormComponent', () => {
  let component: PoeFormComponent;
  let fixture: ComponentFixture<PoeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
