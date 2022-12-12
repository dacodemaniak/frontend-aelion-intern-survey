import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Stagiaire } from 'src/app/core/models/stagiaire';
import { StagiaireService } from 'src/app/core/services/stagiaire.service';
import { StagiaireDto } from '../../dto/stagiaire-dto';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'app-stagiaire-form',
  templateUrl: './stagiaire-form.component.html',
  styleUrls: ['./stagiaire-form.component.scss']
})
export class StagiaireFormComponent implements OnInit, OnDestroy {
  // stagiaire: Stagiaire = new Stagiaire()

  stagiaireForm!: FormGroup;

  public addMode: boolean = true;

  constructor(
    private stagiaireService: StagiaireService,
    private formBuilderService: FormBuilderService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const data: any = this.route.snapshot.data;
    console.log(`${data.form instanceof FormGroup ? 'OK' : 'KO'}`)

    this.stagiaireForm = data.form;


    if (this.stagiaireForm.value.id !== 0) {
      this.addMode =  false;
    } else {
      this.addMode = true;
    }

  }

  ngOnDestroy(): void {
    console.log(`Component dies`);
      this.addMode = true;
  }
  /**
   * Returns a list of form controls
   * @usage In template : c['lastname']
   *  instead of stagiaireForm.controls['lastname']
   */
  public get c(): {[key: string]: AbstractControl} {
    return this.stagiaireForm.controls;
  }

  onSubmit() {
    console.log("Delegate add stagiaire:", this.stagiaireForm.value)
    const dto: StagiaireDto = new StagiaireDto(this.stagiaireForm.value)

    let subscription: Observable<any>;

    if (this.addMode) {
      subscription = this.stagiaireService.add(dto)
    } else {
      // Invoke service update method
      subscription = this.stagiaireService.update(
        dto
      )
    }
    subscription.subscribe(() => this.goHome())
  }

  public goHome(): void {
    this.router.navigate(['/', 'home']);
  }

}
