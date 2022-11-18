import { Component } from '@angular/core';
import { Stagiaire } from './core/models/stagiaire';
import { StagiaireService } from './core/services/stagiaire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Suivi des stagaires';

  public stagiaires: Array<Stagiaire> = this.stagiaireService.getStagiaires();

  public inputType: string = 'password';
  public abbrHTML: string = 'Hyper Text Markup Language';
  
  public constructor(
    private stagiaireService: StagiaireService
  ) {}

  public toggleTitle(): void {
    if (this.title === 'Suivi des stagiaires') {
      this.title = 'Hello Angular';
    } else {
      this.title = 'Suivi des stagiaires';
    }
  }

  public showPassword(): void {
    if (this.inputType === 'password') {
      this.inputType = 'text';
      setTimeout(
        () => {
          this.inputType = 'password'
        },
        800
      )
    } else {
      this.inputType = 'password';
    }
  }

  public addStagiaire(): void {}
}
