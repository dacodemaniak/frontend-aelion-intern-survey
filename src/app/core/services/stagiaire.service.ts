import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Stagiaire } from '../models/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  private stagiaires: Array<Stagiaire> = [];
  
  constructor(
    private httpClient: HttpClient
  ) {
    this.feedIt();
  }

  public findAll(): Observable<Stagiaire[]> {
    return this.httpClient.get<any>(
      'http://localhost:3000/stagiaires'
    )
    .pipe(
      take(1),
      map((stagiaires: any[]) => {
        return stagiaires.map((inputStagiaire: any) => {
          const stagiaire: Stagiaire = new Stagiaire();
          stagiaire.setId(inputStagiaire.id);
          stagiaire.setLastName(inputStagiaire.lastName);
          stagiaire.setFirstName(inputStagiaire.firstName);
          stagiaire.setEmail(inputStagiaire.email);
          stagiaire.setPhoneNumber(inputStagiaire.phoneNumber);
          stagiaire.setBirthDate(new Date(inputStagiaire.birthDate));
          return stagiaire;
        })
      })
    )
  }

  public getStagiaires(): Array<Stagiaire> {
    return this.stagiaires;
  }

  public delete(stagiaire: Stagiaire): void {
    console.log(`Le composant me demande de supprimer ${stagiaire.getLastName()}`);
    const stagiaireIndex: number = this.stagiaires.findIndex(
      (obj: Stagiaire) => obj.getId() === stagiaire.getId()
    );
    this.stagiaires.splice(stagiaireIndex,1);
  }

  public getVisibleStagiaireNumber(date: Date | null): number {
    if (date === null) {
      return this.stagiaires.length;
    }

    return (date.getDate() === 31) ? 
      this.stagiaires.filter((obj: Stagiaire) => obj.getBirthDate() > date).length :
      this.stagiaires.filter((obj: Stagiaire) => obj.getBirthDate() < date).length;
  }

  private feedIt(): void {
    let stagiaire: Stagiaire = new Stagiaire();
    stagiaire.setId(1);
    stagiaire.setLastName('Aubert');
    stagiaire.setFirstName('Jean-Luc');
    stagiaire.setPhoneNumber('+(33)6 15 15 15 15');
    stagiaire.setEmail('jla.webprojet@gmail.com');
    stagiaire.setBirthDate(new Date(1968, 3, 30));

    this.stagiaires.push(stagiaire);

    stagiaire = new Stagiaire();
    stagiaire.setId(2);
    stagiaire.setLastName('Bond');
    stagiaire.setFirstName('James');
    stagiaire.setPhoneNumber('+(33)7 07 07 07 07');
    stagiaire.setEmail('james.bond@mi6.co.uk');
    stagiaire.setBirthDate(new Date(1945, 5, 7));

    this.stagiaires.push(stagiaire);

  }
}
