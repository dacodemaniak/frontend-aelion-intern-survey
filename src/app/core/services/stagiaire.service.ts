import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { StagiaireDto } from 'src/app/stagiaires/dto/stagiaire-dto';
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

  public findOne(id: number): Observable<Stagiaire> {
    return this.httpClient.get<any>(
      `${this.controllerBaseUrl}/${id}`
    )
    .pipe(
      take(1),
      map((inputStagiaire: any) => {
        const stagiaire: Stagiaire = new Stagiaire();
        stagiaire.setId(inputStagiaire.id);
        stagiaire.setLastName(inputStagiaire.lastName);
        stagiaire.setFirstName(inputStagiaire.firstName);
        stagiaire.setEmail(inputStagiaire.email);
        stagiaire.setPhoneNumber(inputStagiaire.phoneNumber);
        stagiaire.setBirthDate(new Date(inputStagiaire.birthDate));
        return stagiaire;
      })
    )
  }

  public getStagiaires(): Array<Stagiaire> {
    return this.stagiaires;
  }

  public add(stagiaire: StagiaireDto): Observable<Stagiaire> {
    console.log('add stagiaire asked: ', stagiaire)
    // Transform any to Stagiaire
    return this.httpClient.post<StagiaireDto>(
          this.controllerBaseUrl,
          stagiaire.toStagiaire()
        )
        .pipe(
          take(1),
          map((stagiaireDto: StagiaireDto) => {
            const stagiaire: Stagiaire = new Stagiaire();
            stagiaire.setId(stagiaireDto.id!);
            stagiaire.setLastName(stagiaireDto.lastname);
            stagiaire.setFirstName(stagiaireDto.firstname);
            stagiaire.setBirthDate(new Date(stagiaireDto.birthdate));
            stagiaire.setPhoneNumber(stagiaireDto.phoneNumber);
            stagiaire.setEmail(stagiaireDto.email);
            return stagiaire;
          })
          );
  }

  public update(stagiaireDto: StagiaireDto): Observable<Stagiaire> {
    const stagiaire: Stagiaire = stagiaireDto.toStagiaire();
    return this.httpClient.put<any>(
      `${this.controllerBaseUrl}`,
      stagiaire
    )
    .pipe(
      take(1),
      map((anyStagiaire: any) => {
        const stagiaire: Stagiaire = new Stagiaire();
        stagiaire.setId(anyStagiaire.id!);
        stagiaire.setLastName(anyStagiaire.lastName);
        stagiaire.setFirstName(anyStagiaire.firstName);
        stagiaire.setBirthDate(new Date(anyStagiaire.birthDate));
        stagiaire.setPhoneNumber(anyStagiaire.phoneNumber);
        stagiaire.setEmail(anyStagiaire.email);
        return stagiaire;
      })
    )
  }

  public delete(stagiaire: Stagiaire): Observable<HttpResponse<any>> {
    // 1. call backend
    return this.httpClient.delete(
      `${this.controllerBaseUrl}/${stagiaire.getId()}`,
      {
        observe: 'response'
      }
    );
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
