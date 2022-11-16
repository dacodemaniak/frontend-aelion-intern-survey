import { Stagiaire } from 'src/app/core/models/stagiaire';
import { InitialsPipe } from './initials.pipe';

describe('InitialsPipe', () => {
  it('create an instance', () => {
    const pipe = new InitialsPipe();
    expect(pipe).toBeTruthy();
  });

  it(`Should return JA with no args`, () => {
    const stagiaire: Stagiaire = new Stagiaire();
    stagiaire.setLastName('Aubert');
    stagiaire.setFirstName('Jean-Luc');

    const pipe = new InitialsPipe();

    expect(pipe.transform(stagiaire)).toBe('JA');
  });

  it(`Should return AJ with firstNameFirst sets to false`, () => {
    const stagiaire: Stagiaire = new Stagiaire();
    stagiaire.setLastName('Aubert');
    stagiaire.setFirstName('Jean-Luc');

    const pipe = new InitialsPipe();
    const variation: any = {firstNameFirst: false};
    expect(pipe.transform(stagiaire, variation)).toBe('AJ');
  });

  it(`Should return JLA with full property sets to true`, () => {
    const stagiaire: Stagiaire = new Stagiaire();
    stagiaire.setLastName('Aubert');
    stagiaire.setFirstName('Jean-Luc');

    const pipe = new InitialsPipe();
    const variation: any = {full: true};
    expect(pipe.transform(stagiaire, variation)).toBe('JLA');
  });

  it(`Should return AJL with full property sets to true and firstNameFirst to false`, () => {
    const stagiaire: Stagiaire = new Stagiaire();
    stagiaire.setLastName('Aubert');
    stagiaire.setFirstName('Jean-Luc');

    const pipe = new InitialsPipe();
    const variation: any = {firstNameFirst: false, full: true};
    expect(pipe.transform(stagiaire, variation)).toBe('AJL');
  });

});
