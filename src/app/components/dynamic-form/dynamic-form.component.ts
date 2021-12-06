import { Component, Input, OnInit } from '@angular/core';
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
  form!: FormGroup;
  currentStep: number;
  vehicle!: string;
  constructor(private formGroupService: FormGroupServiceService) {
    this.currentStep = 1;
  }

  setVehicle(newVehicle: string) {
    this.vehicle = newVehicle
  }

  modifyStep(modifier: number) {
    this.currentStep += modifier
  }

  ngOnInit(): void {
    this.form = this.formGroupService.toFormGroup(
      this.questions as Question<string>[]
    );
  }

  onSubmit() {
    console.log('submitted');
  }
}
