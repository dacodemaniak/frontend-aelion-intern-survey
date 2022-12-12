import { Inject, Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { Stagiaire } from 'src/app/core/models/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  private form!: FormGroup;
  private stagiaire!: Stagiaire;
  private updateMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private locale: string
  ) {
    this.locale = 'fr';
    this.adapter.setLocale(this.locale);
  }

  public getForm(): FormGroup {
    return this.form;
  }

  public build(...args: Stagiaire[]): FormBuilderService {
    if (args.length) {
      this.stagiaire = Object.assign(new Stagiaire(), args[0]);
      this.updateMode = true;
    } else
      this.stagiaire = new Stagiaire();

      // if (this.stagiaire.getId() !== 0) {
      //   this.updateMode = true;
      // }
    this.form = this.formBuilder.group({
      lastname: [
        this.stagiaire.getLastName(), // Default value,
        [
          Validators.required
        ]
      ],
      firstname: [
        this.stagiaire.getFirstName(),
        [
          Validators.required
        ]
      ],
      email: [
        this.stagiaire.getEmail(),
        [
          Validators.required,
          Validators.email
        ]
      ],
      phoneNumber: [
        this.stagiaire.getPhoneNumber(),
        [
          Validators.required,
          Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")
        ]
      ],
      birthdate: [
        this.stagiaire.getBirthDate() !== null ? this.stagiaire.getBirthDate() : ''
      ]
    });

    // Ajoute un contrôle avec la valeur de l'id du Stagiaire
    // donc... form.value vaudra {id: 1, ...}
    if (this.updateMode) {
      const idControl: AbstractControl = new FormControl(this.stagiaire.getId());
      this.form.addControl('id', idControl);
    }
    return this; // To chain methods
  }
}
