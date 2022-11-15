import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stagiaire.FilterComponent } from './stagiaire.filter.component';

describe('Stagiaire.FilterComponent', () => {
  let component: Stagiaire.FilterComponent;
  let fixture: ComponentFixture<Stagiaire.FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stagiaire.FilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stagiaire.FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
