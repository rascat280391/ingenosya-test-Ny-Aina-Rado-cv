import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CandidatService } from '../candidat.service';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import 'moment/locale/fr';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class CurriculumComponent implements OnInit {

  formGroup: FormGroup;
  maxDate: Date;

  constructor(private _formBuilder: FormBuilder, public candidatService: CandidatService, private router: Router) { }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.maxDate = new Date(currentYear - 22, currentMonth, currentDay);
    this.formGroup = this._formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      province: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      contact: ['', Validators.required]
    });
  }

  onSubmit (): void {
    if( this.formGroup.valid ) {
      this.candidatService.setState({
        ...this.formGroup.value, 
        hobbies: '',
        experiences: '',
        formations: '',
        isCreated: true
      });
      this.router.navigate(['/divers']);
    }
  }
}
