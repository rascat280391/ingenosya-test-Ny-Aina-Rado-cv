import { Component, OnInit, Input } from '@angular/core';
import { CandidatService } from '../candidat.service';
import { DateTime } from '../date-time';
import { Router } from '@angular/router';
import { Skill, Experience, Formation } from '../candidat';

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.scss']
})
export class VisualisationComponent implements OnInit {

  @Input('skills') skills: Skill[];
  @Input('hobbies') hobbies: string[];
  @Input('experiences') experiences: Experience[];
  @Input('formations') formations: Formation[];

  constructor(private router: Router, public candidatService: CandidatService) { }

  ngOnInit(): void {
  }

  dateFormat(date: string) {
    return DateTime.format(date);
  }

  submitEmail () {
    this.router.navigate(['/email']);
  }

}
