import { Stagiaire } from 'src/app/core/models/stagiaire';
import { InitialsPipe } from './initials.pipe';
import { VariantType } from './variant-type';

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

    const variation: VariantType = {firstNameFirst: false};

    expect(pipe.transform(stagiaire, variation)).toBe('AJ');
  });

  it(`Should return JLA with full property sets to true`, () => {
    const stagiaire: Stagiaire = new Stagiaire();
    stagiaire.setLastName('Aubert');
    stagiaire.setFirstName('Jean-Luc');

    const pipe = new InitialsPipe();
    const variation: VariantType = {full: true};
    expect(pipe.transform(stagiaire, variation)).toBe('JLA');
  });

  it(`Should return AJL with full property sets to true and firstNameFirst to false`, () => {
    const stagiaire: Stagiaire = new Stagiaire();
    stagiaire.setLastName('Aubert');
    stagiaire.setFirstName('Jean-Luc');

    const pipe = new InitialsPipe();
    const variation: VariantType = {firstNameFirst: false, full: true};
    expect(pipe.transform(stagiaire, variation)).toBe('AJL');
  });

  it(`Should throw an Error if value is not a Stagiaire instance`, () => {
    const stagiaire: any = 'something wrong';

    const pipe = new InitialsPipe();

    expect(() => pipe.transform(stagiaire)).toThrowError();
  });

  it(`Should return JB even if full is set to true`, () => {
    const stagiaire: Stagiaire = new Stagiaire();
    stagiaire.setLastName('Bond');
    stagiaire.setFirstName('James');

    const pipe = new InitialsPipe();
    const variation: VariantType = {full: true};

    expect(pipe.transform(stagiaire, variation)).toBe('JB');
  });

  it(`Should return BJ even if full is set to true and firstNameFirst to false`, () => {
    const stagiaire: Stagiaire = new Stagiaire();
    stagiaire.setLastName('Bond');
    stagiaire.setFirstName('James');

    const pipe = new InitialsPipe();
    const variation: VariantType = {full: true, firstNameFirst: false};

    expect(pipe.transform(stagiaire, variation)).toBe('BJ');
  });

  it(`Should throw an Error if variation is not of type VariantType`, () => {
    const stagiaire: Stagiaire = new Stagiaire();
    stagiaire.setLastName('Bond');
    stagiaire.setFirstName('James');

    const pipe = new InitialsPipe();
    const variation: any = {pouet: 'coucou'};

    expect(() => pipe.transform(stagiaire, variation)).toThrowError();
  });

});
