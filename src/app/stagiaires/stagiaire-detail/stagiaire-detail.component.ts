import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stagiaire } from 'src/app/core/models/stagiaire';

@Component({
  selector: 'app-stagiaire-detail',
  templateUrl: './stagiaire-detail.component.html',
  styleUrls: ['./stagiaire-detail.component.scss']
})
export class StagiaireDetailComponent implements OnInit {

  @Output() onCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() stagiaire!: Stagiaire;

  constructor() { }

  ngOnInit(): void {
  }

  public onClose(): void {
    this.onCloseEvent.emit(true);
  }
}
