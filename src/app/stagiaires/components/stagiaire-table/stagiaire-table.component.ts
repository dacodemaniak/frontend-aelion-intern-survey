import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/core/models/stagiaire';
import { StagiaireService } from 'src/app/core/services/stagiaire.service';


@Component({
  selector: 'app-stagiaire-table',
  templateUrl: './stagiaire-table.component.html',
  styleUrls: ['./stagiaire-table.component.scss']
})
export class StagiaireTableComponent implements OnInit {

  public stagiaires: Array<Stagiaire> = [];
  public stopDate: Date | null = null;

  constructor(private stagiaireService: StagiaireService) {}

  ngOnInit(): void {
    this.stagiaires = this.stagiaireService.getStagiaires();
  }

  public getVisibleStagiaireNumber(): number {
    return this.stagiaireService.getVisibleStagiaireNumber(this.stopDate);
  }

  public onRemove(stagiaire: Stagiaire): void {
    console.log(`L'utilisateur souhaite supprimer ${stagiaire.getLastName()}`);
    this.stagiaireService.delete(stagiaire);
  }

  public filterChanged(event: Date | null): void {
    console.log(`Filter as changed to : ${event}`);
    this.stopDate = event;
  }

  public changeView(stagiaire: Stagiaire): boolean {
    if (this.stopDate === null) {
      return true;
    }

    if (this.stopDate.getDate() === 31) {
      return stagiaire.getBirthDate() > this.stopDate;
    }

    return stagiaire.getBirthDate() < this.stopDate;
  }

}
