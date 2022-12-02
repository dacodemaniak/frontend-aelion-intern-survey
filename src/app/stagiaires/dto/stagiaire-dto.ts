import { Stagiaire } from './../../core/models/stagiaire';

export class StagiaireDto {
    public id?: number;
    public lastname: string = '';
    public firstname: string = '';
    public email: string = '';
    public phoneNumber: string = '';
    public birthdate!: Date;

    public constructor(formValues: any) {
        Object.assign(this, formValues);
        /**
         * formValues : {
         *  lastname: 'Aubert',
         *  firstname: 'Jean-Luc',
         *  email: 'jla.webprojet@gmail.com',
         *  phoneNumber: '06 55 22 33 66',
         *  birthDate: null
         * }
         */
    }

    public toStagiaire(): Stagiaire {
      const stagiaire: Stagiaire = new Stagiaire();
      if (this.id !== undefined)
        stagiaire.setId(this.id);
      stagiaire.setLastName(this.lastname);
      stagiaire.setFirstName(this.firstname);
      stagiaire.setPhoneNumber(this.phoneNumber);
      stagiaire.setBirthDate(this.birthdate);
      stagiaire.setEmail(this.email);

      return stagiaire;
    }
}
