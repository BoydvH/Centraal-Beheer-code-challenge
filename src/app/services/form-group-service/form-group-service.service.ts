import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Question } from '../../models/question';

@Injectable({
  providedIn: 'root',
})
export class FormGroupServiceService {
  constructor() {}

  toFormGroup(questions: Question<string>[]) {
    const group: any = {};

    questions.forEach((question) => {
      // create group for question key, with required validator if necessary.
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
