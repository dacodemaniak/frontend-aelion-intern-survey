import { Pipe, PipeTransform } from '@angular/core';
import { Stagiaire } from 'src/app/core/models/stagiaire';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value instanceof Stagiaire) {
      return this.getInitials(value).toUpperCase();
    } else {
      throw new Error(`value is not a valid Stagiaire object`);
    }
  }

  private getInitials(stagiaire: Stagiaire): string {
    return stagiaire.getFirstName().charAt(0) + 
      stagiaire.getLastName().charAt(0);
  }
}
