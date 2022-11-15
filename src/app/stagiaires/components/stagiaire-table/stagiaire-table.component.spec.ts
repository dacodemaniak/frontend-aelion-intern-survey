import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireTableComponent } from './stagiaire-table.component';

describe('StagiaireTableComponent', () => {
  let component: StagiaireTableComponent;
  let fixture: ComponentFixture<StagiaireTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagiaireTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagiaireTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
