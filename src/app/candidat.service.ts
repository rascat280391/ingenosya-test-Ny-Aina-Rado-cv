import { Injectable } from '@angular/core';
import { Candidat } from './candidat';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  readonly state$: Observable<Candidat>;
  private _state$: BehaviorSubject<Candidat>;
  private candidat: Candidat;

  public constructor() {
    this.candidat = {
      isCreated: false,
      name: '',
      address: '',
      province: '',
      city: '',
      email: '',
      birthday: '',
      contact: '',
      skills: [],
      hobbies: [],
      experiences: [],
      formations: [],
    };
    this._state$ = new BehaviorSubject<Candidat>(this.candidat);
    this.state$ = this._state$.asObservable();
  }

  public get state(): Candidat {
    return this._state$.getValue();
  }

  public setValue (key: string, value: string): void {
    this._state$.next({
      ...this.candidat,
      [key]: value
    });
  }

  public setState(candidat: Candidat): void {
    this._state$.next(candidat);
  }
}
