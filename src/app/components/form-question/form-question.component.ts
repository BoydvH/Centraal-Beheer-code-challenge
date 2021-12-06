import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Question} from '../../models/question';
import {KentekenCheck} from 'rdw-kenteken-check'

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
  valid: boolean
  constructor() {
    this.valid = true
  }

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

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    target.value = this.licensePlateFormatter(target.value)
  }

  // separate numbers and letters
  licensePlateFormatter(licencePlate: string): string {
    return licencePlate
      // separate numbers and letters
      .match(/[a-z]+|[0-9]+/gi)!
      .join("-")
      .toUpperCase()
      // separate groups of four letters
      .replace(/[a-z]{4}/gi, function (x)
      {
        return `${x.substring(0,2)}-${x.substring(2,4)}`;
      });
  }

  // validate license plate number for rdw approved format
  validateLicensePlate(event: Event) {
    const licensePlateNumber = (event.target as HTMLInputElement).value
    const licensePlate = new KentekenCheck(licensePlateNumber)
    this.valid = licensePlate.formatLicense() !== "XX-XX-XX";
  }

  get isValid() {
    return this.valid
  }
}
