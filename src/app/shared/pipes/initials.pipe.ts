import { Pipe, PipeTransform } from '@angular/core';
import { Stagiaire } from 'src/app/core/models/stagiaire';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if (value instanceof Stagiaire) {
      return this.getInitials(value, args).toUpperCase();
    } else {
      throw new Error(`value is not a valid Stagiaire object`);
    }
  }

  private getInitials(stagiaire: Stagiaire, variation: unknown[]): string {
     // Get the object passed as parameter to the pipe
     const variant: any = variation[0];

    if (variant !== undefined && variant.firstNameFirst === false) { // 1 ET 1 => true, 1 ET 0 => false, 0 ET 1 => false, 0 ET 0 => false
      return this.lastNameFirst(stagiaire);
    }
    
    return this.firstNameFirst(stagiaire);

    return variant.firstNameFirst ? this.firstNameFirst(stagiaire) : this.lastNameFirst(stagiaire);
  }

  private firstNameFirst(stagiaire: Stagiaire): string {
    return stagiaire.getFirstName().charAt(0) + 
    stagiaire.getLastName().charAt(0);
  }

  private lastNameFirst(stagiaire: Stagiaire): string {
    return stagiaire.getLastName().charAt(0) + 
    stagiaire.getFirstName().charAt(0);
  }

}
