import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../candidat.service';
import { DateTime } from '../date-time';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.scss']
})
export class VisualisationComponent implements OnInit {

  constructor(public candidatService: CandidatService, private router: Router) { }

  ngOnInit(): void {
  }

  dateFormat(date: string) {
    return DateTime.format(date);
  }

  submitEmail () {
    this.router.navigate(['/email']);
  }

}
