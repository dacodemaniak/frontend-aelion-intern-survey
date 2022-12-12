import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoeListComponent } from './poe-list.component';

describe('PoeListComponent', () => {
  let component: PoeListComponent;
  let fixture: ComponentFixture<PoeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
