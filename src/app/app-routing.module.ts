import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent },
  { path: 'form', component: SurveyFormComponent },
  { path: 'display', component: SurveyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
