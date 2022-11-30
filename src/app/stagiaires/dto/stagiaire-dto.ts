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
}
