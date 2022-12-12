import { TestBed } from '@angular/core/testing';

import { StagiaireResolver } from './stagiaire.resolver';

describe('StagiaireResolver', () => {
  let resolver: StagiaireResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StagiaireResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
