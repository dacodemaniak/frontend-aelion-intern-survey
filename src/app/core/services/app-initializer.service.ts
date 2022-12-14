import { APP_INITIALIZER, Injectable } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {

  constructor(
    private _userService: UserService
  ) { }

  public init(): Promise<void> {
    return new Promise<any>((resolve: any) => {
      this._userService.hasUser();
      resolve();
    })
  }
}


export const initializeApp = (appInitService: AppInitializerService): any => {
  return (): Promise<void> => {
    return appInitService.init();
  }
}

export const appInit = {
  provide: APP_INITIALIZER,
  useFactory: initializeApp, // Utilise la fonction qui instancie le service et appelle la méthode init()
  deps: [ // DI à la main
    AppInitializerService
  ],
  multi: true
}
