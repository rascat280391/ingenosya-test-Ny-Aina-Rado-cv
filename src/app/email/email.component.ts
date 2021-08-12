import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public candidatService: CandidatService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      attachments: ['', Validators.required],
    });

    // redirect
    if( !this.candidatService.state.isCreated ) {
      this.router.navigate(['/']);
    }
  }

  onSubmit () {
    // send mail via api or backend
    alert('Envoyé')
  }

}
