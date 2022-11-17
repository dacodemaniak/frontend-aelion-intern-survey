import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StagiaireTableComponent } from './stagiaires/components/stagiaire-table/stagiaire-table.component';
import { StagiaireFilterComponent } from './stagiaires/components/stagiaire.filter/stagiaire.filter.component';
import { InitialsPipe } from './shared/pipes/initials.pipe';
import { StagiaireDetailComponent } from './stagiaires/stagiaire-detail/stagiaire-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StagiaireTableComponent,
    StagiaireFilterComponent,
    InitialsPipe,
    StagiaireDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
