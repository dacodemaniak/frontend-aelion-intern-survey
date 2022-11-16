import { Pipe, PipeTransform } from '@angular/core';
import { Stagiaire } from 'src/app/core/models/stagiaire';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  private variant: any;

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value instanceof Stagiaire) {
      this.variant = args[0]; // Get the object at index 0 (can be undefined)
      return this.getInitials(value, args).toUpperCase();
    } else {
      throw new Error(`value is not a valid Stagiaire object`);
    }
  }

  private getInitials(stagiaire: Stagiaire, variation: unknown[]): string {

    if (this.variant !== undefined && this.variant.firstNameFirst === false) { // 1 ET 1 => true, 1 ET 0 => false, 0 ET 1 => false, 0 ET 0 => false
      return this.lastNameFirst(stagiaire);
    }
    
    return this.firstNameFirst(stagiaire);
  }

  private firstNameFirst(stagiaire: Stagiaire): string {
    return this.firstName(stagiaire.getFirstName()) + stagiaire.getLastName().charAt(0);
  }

  private lastNameFirst(stagiaire: Stagiaire): string {
    return stagiaire.getLastName().charAt(0) + 
      this.firstName(stagiaire.getFirstName());
  }

  private firstName(firstName: string): string  {
    if (this.variant && this.variant.full) {
      const dashPosition: number = firstName.indexOf('-');
      if (dashPosition !== -1) {
        return firstName.charAt(0) + firstName.charAt(dashPosition + 1);
      }
    }
    return firstName.charAt(0);
  }
}
