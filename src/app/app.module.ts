import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiversComponent } from './divers/divers.component';
import { VisualisationComponent } from './visualisation/visualisation.component';
import { EmailComponent } from './email/email.component';

import { CandidatService } from './candidat.service';
import {FlexLayoutModule} from "@angular/flex-layout";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locales/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    DiversComponent,
    VisualisationComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MaterialModule,
  ],
  providers: [
    CandidatService,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
