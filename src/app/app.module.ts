import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { AppRoutingModule } from './/app-routing.module';
//import { FormComponent } from './survey-form/survey-form.component';
import { DisplayService } from './displayservice.service';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'survey-form', component: SurveyFormComponent },
  { path: 'survey-list', component: SurveyListComponent }
];


@NgModule({
  
  declarations: [
    AppComponent,
    SurveyFormComponent,
    WelcomeComponent,
    SurveyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  
  providers: [DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
