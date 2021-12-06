import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from '../../models/question';
import { FormGroupServiceService } from '../../services/form-group-service/form-group-service.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [FormGroupServiceService],
})
export class DynamicFormComponent implements OnInit {
  @Input() formHeader: string | null = '';
  @Input() formSubmit: string | null = '';
  @Input() questions: Question<string>[] | null = [];
  @Output() imagePathEvent = new EventEmitter<string>();
  form!: FormGroup;
  currentStep: number;
  vehicle!: string;
  imagePath: string;
  constructor(private formGroupService: FormGroupServiceService) {
    this.currentStep = 1;
    this.imagePath = "../assets/auto.jpg"
  }

  ngOnInit(): void {
    this.form = this.formGroupService.toFormGroup(
      this.questions as Question<string>[]
    );
    this.imagePathEvent.emit(this.imagePath)
  }

  setVehicle(newVehicle: string) {
    this.vehicle = newVehicle
    console.log(newVehicle)
    switch (newVehicle) {
      case "car":
        this.imagePath = "../assets/auto.jpg"
        break;
      case "motorcycle":
        this.imagePath = "../assets/motor.jpg"
        break;
      case "scooter":
        this.imagePath = "../assets/scooter.jpg"
        break;
    }
    this.imagePathEvent.emit(this.imagePath);
  }

  modifyStep(modifier: number) {
    this.currentStep += modifier
  }

  onSubmit() {
    console.log('submitted');
  }
}
