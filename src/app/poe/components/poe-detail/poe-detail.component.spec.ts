import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoeDetailComponent } from './poe-detail.component';

describe('PoeDetailComponent', () => {
  let component: PoeDetailComponent;
  let fixture: ComponentFixture<PoeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
