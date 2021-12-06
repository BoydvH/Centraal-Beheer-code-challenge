import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  @Input() currentStep!: number;
  @Input() vehicle!: string;
  @Output() incrementStepEvent = new EventEmitter<number>();
  @Output() vehicleEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {

  }

  onOptionSelected(event: Event) {
    // increment step to show next question
    if (this.currentStep === this.question.step) {
      this.incrementStepEvent.emit(1)
    }
    // update vehicle to select next question
    if (this.question.step === 1) {
      this.vehicleEvent.emit((event.target as HTMLInputElement).value)
    }
  }



  get isValid() {
    //todo implement validation based on question input
    return true;
  }
}
