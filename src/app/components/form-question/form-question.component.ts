import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from '../../models/question';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css'],
})
export class FormQuestionComponent implements OnInit {
  @Input() question!: Question<string>;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  get isValid() {
    //todo implement validation based on question input
    return true;
  }
}
