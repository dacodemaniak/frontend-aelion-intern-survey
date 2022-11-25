import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment'; 
import { Stagiaire } from '../models/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  private stagiaires: Array<Stagiaire> = [];
  private controllerBaseUrl!: string; 
  
  constructor(
    private httpClient: HttpClient
  ) {
    this.controllerBaseUrl = `${environment.apiBaseUrl}/trainee`;
    //  this.feedIt();
  }

  public findAll(): Observable<Stagiaire[]> {
    return this.httpClient.get<any>(
      this.controllerBaseUrl
    )
    .pipe(
      take(1),
      map((stagiaires: any[]) => {
        return stagiaires.map((inputStagiaire: any) => {
          const stagiaire: Stagiaire = new Stagiaire();
          stagiaire.setId(inputStagiaire.id);
          stagiaire.setLastName(inputStagiaire.lastname);
          stagiaire.setFirstName(inputStagiaire.firstname);
          stagiaire.setEmail(inputStagiaire.email);
          stagiaire.setPhoneNumber(inputStagiaire.phoneNumber);
          stagiaire.setBirthDate(new Date(inputStagiaire.birthdate));
          return stagiaire;
        })
      })
    )
  }

  public getStagiaires(): Array<Stagiaire> {
    return this.stagiaires;
  }

  public delete(stagiaire: Stagiaire): void {
    console.log('delete stagiaire asked: ' 
        + stagiaire.getLastName()      
        + '(' + stagiaire.getId() +')')
    // 1. call backend
    this.httpClient.delete(
      `${this.controllerBaseUrl}/${stagiaire.getId()}`
      )
      .subscribe(
        _ => {
          // remote remove is done
          console.log('delete stagiaire in remote api done: ' 
            + stagiaire.getLastName()      
            + '(' + stagiaire.getId() +')')
          // 2. adapt local list
          const stagiaireIndex: number = this.stagiaires.findIndex(
            (obj: Stagiaire) => obj.getId() === stagiaire.getId()
          );
          this.stagiaires.splice(stagiaireIndex,1);
        }
      )
    
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
