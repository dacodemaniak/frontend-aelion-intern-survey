import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stagiaire } from 'src/app/core/models/stagiaire';
import { StagiaireService } from 'src/app/core/services/stagiaire.service';
import { HandleDetailService } from 'src/app/shared/directives/handle-detail.service';


@Component({
  selector: 'app-stagiaire-table',
  templateUrl: './stagiaire-table.component.html',
  styleUrls: ['./stagiaire-table.component.scss']
})
export class StagiaireTableComponent implements OnInit {

  public stagiaires: Array<Stagiaire> = [];
  public stopDate: Date | null = null;
  /**
   * if true detail is visible, hidden else
   */
  public isDetailHidden$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public selectedStagiaire: Stagiaire | null = null;

  public bubbleConfig: any = {
    height: '2em',
    width: '2em',
    lineHeight: '2em', // equiv css : line-height
    backgroundColor: 'rgba(20, 20, 200, .5)',
    borderColor: 'darken(rgba(20, 20, 200, .5)), 25%)',
    color: '#fff',
    borderRadius: '50%',
    fontWeight: 'bold',
    verticalAlign: 'middle',
    textAlign: 'center',
    display: 'inline-block'
  }

  constructor(
    private stagiaireService: StagiaireService,
    private handleDetailService: HandleDetailService
  ) {}

  ngOnInit(): void {
    this.stagiaires = this.stagiaireService.getStagiaires();
    this.isDetailHidden$ = this.handleDetailService.isDetailHidden;
  }

  public getVisibleStagiaireNumber(): number {
    return this.stagiaireService.getVisibleStagiaireNumber(this.stopDate);
  }

  public onRemove(stagiaire: Stagiaire): void {
    console.log(`L'utilisateur souhaite supprimer ${stagiaire.getLastName()}`);
    this.stagiaireService.delete(stagiaire);
  }

  public onClick(stagiaire: Stagiaire): void {
      this.selectedStagiaire = stagiaire;
      this.handleDetailService.setIsDetailHidden(false);
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
