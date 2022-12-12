import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Poe } from '../models/poe';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PoeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public findAll(): Observable<Poe[]> {
    return this.httpClient.get<any>(
      `${environment.apiBaseUrl}poe`
    )
    .pipe(
      take(1),
      map((persistentPoes: any[]) => {
        return persistentPoes.map((persistentPoe) => {
          const poe: Poe = new Poe();
          poe.deserialize(persistentPoe);
          return poe;
        })
      })
    )
  }

  public findOne(id: number): Observable<Poe> {
    return this.httpClient.get<any>(
      `${environment.apiBaseUrl}poe`
    )
    .pipe(
      take(1),
      map((persistentPoe: any) => {
        const poe: Poe = new Poe();
        poe.deserialize(persistentPoe);
        return poe;
      })
    )    
  }
}
