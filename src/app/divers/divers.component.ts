import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatService } from '../candidat.service';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Experience, Formation, Skill } from '../candidat';
import { DateTime } from '../date-time';

@Component({
  selector: 'app-divers',
  templateUrl: './divers.component.html',
  styleUrls: ['./divers.component.scss']
})
export class DiversComponent implements OnInit {

  aboutGroup: FormGroup;
  skillGroup: FormGroup;
  hobbyGroup: FormGroup;
  expGroup: FormGroup;
  formGroup: FormGroup;

  skills: Skill[];
  hobbies: string[];
  exps: Experience[];
  forms: Formation[];

  constructor(private _formBuilder: FormBuilder, public candidatService: CandidatService, private router: Router) {
    this.skills = [];
    this.hobbies = [];
    this.exps = [];
    this.forms = [];
  }

  ngOnInit(): void {
    this.aboutGroup = this._formBuilder.group({
      about: ['']
    });

    this.skillGroup = this._formBuilder.group({
      skill: '',
      skillStep: '',
      skillList: ['', Validators.required]
    });

    this.hobbyGroup = this._formBuilder.group({
      hobby: '',
      hobbyList: ['', Validators.required]
    });

    this.expGroup = this._formBuilder.group({
      nomEntreprise: '',
      nomPoste: '',
      dateDebut: '',
      dateFin: '',
      descPoste: '',
      expList: ['']
    });

    this.formGroup = this._formBuilder.group({
      nomInstitut: '',
      date: '',
      document: '',
      formList: ['']
    });

    // redirect
    if( !this.candidatService.state.isCreated ) {
      this.router.navigate(['/']);
    }
    console.log(' candidat ', this.candidatService.state );
  }

  addSkill () {
    if( this.skillGroup.value.skill ) {
      this.skills.push({name: this.skillGroup.value.skill, value: this.skillGroup.value.skillStep});
      this.skillGroup.patchValue({
        skill: '',
        skillStep: 0,
        skillList: this.skills.join(',')
      });
    }
  }

  removeSkill (index: number) {
    if( this.skills.length ) {
      this.skills.splice(index, 1);
    }
  }

  addHobby () {
    if( this.hobbyGroup.value.hobby ) {
      this.hobbies.push(this.hobbyGroup.value.hobby);
      this.hobbyGroup.patchValue({
        hobby: '',
        hobbyList: this.hobbies.join(',')
      });
    }
  }

  removeHobby (index: number) {
    if( this.hobbies.length ) {
      this.hobbies.splice(index, 1);
    }
  }

  addExp () {
    if( Object.keys(this.expGroup.value).filter(key => this.expGroup.value[key].length || typeof this.expGroup.value[key].getDate === "function" ).length >= 5 ) {
      this.exps.push({ ...this.expGroup.value });
      this.expGroup.patchValue({
        ...this.expGroup.value,
        nomEntreprise: '',
        dateDebut: '',
        dateFin: '',
        nomPoste: '',
        descPoste: '',
        expList: this.exps.join(',')
      });
    }
  }

  removeExp (index: number) {
    if( this.exps.length ) {
      this.exps.splice(index, 1);
    }
  }

  addForm() {
    console.log('formGroup ', this.formGroup.value);
    if( this.formGroup.value.nomInstitut.length &&
      this.formGroup.value.document.length &&
      typeof this.formGroup.value.date.getDate === "function"
    ) {
      this.forms.push({...this.formGroup.value});
      this.formGroup.patchValue({
        nomInstitut: '',
        document: '',
        date: '',
        formList: this.forms.join(',')
      });
    }
  }

  removeForm (index: number) {
    if( this.forms.length ) {
      this.forms.splice(index, 1);
    }
  }

  dateFormat(date: string) {
    return DateTime.format(date);
  }

  submitRecap () {
    this.candidatService.setState({
      ...this.candidatService.state,
      skills: this.skills,
      hobbies: this.hobbies,
      experiences: this.exps,
      formations: this.forms
    });
    console.log('candidat ', this.candidatService.state)
    this.router.navigate(['/email']);
  }
}
