import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagiaireFormComponent } from './stagiaires/components/stagiaire-form/stagiaire-form.component';
import { StagiaireTableComponent } from './stagiaires/components/stagiaire-table/stagiaire-table.component';
import { StagiaireDetailComponent } from './stagiaires/stagiaire-detail/stagiaire-detail.component';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'home', // Redirige vers un autre chemin ici 'home'
      pathMatch: 'full'
      // home/1
      // home
    },
    {
      path: 'home',
      component: StagiaireTableComponent
    },
    {
      path:'stagiaire/add',
      component: StagiaireFormComponent
    },
    {
      path: 'stagiaire/:id',
      component: StagiaireDetailComponent
    },
    {
      path: 'stagiaire/update/:id',
      component: StagiaireFormComponent
    },
    {
      path: '**', // Wild card
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ];
}
