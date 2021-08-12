import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { DiversComponent } from './divers/divers.component';
import { EmailComponent } from './email/email.component';
import { VisualisationComponent } from './visualisation/visualisation.component';

const routes: Routes = [
  { path: '', component: CurriculumComponent },
  { path: 'divers', component: DiversComponent },
  { path: 'email', component: EmailComponent },
  { path: '**', component: CurriculumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
