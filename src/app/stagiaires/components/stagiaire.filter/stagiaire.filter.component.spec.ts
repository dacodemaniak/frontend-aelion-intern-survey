import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireFilterComponent } from './stagiaire.filter.component';

describe('Stagiaire.FilterComponent', () => {
  let component: StagiaireFilterComponent;
  let fixture: ComponentFixture<StagiaireFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagiaireFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagiaireFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
