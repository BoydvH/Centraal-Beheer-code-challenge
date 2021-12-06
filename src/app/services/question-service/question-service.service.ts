import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../../models/question-dropdown';
import { TextboxQuestion } from '../../models/question-textbox';

@Injectable({
  providedIn: 'root',
})
export class QuestionServiceService {
  constructor() {}

  getQuestions = () => {
    return [
      // vehicle selector
      new DropdownQuestion({
        key: 'vehicle',
        label: 'Van welk type voertuig wilt u voertuiginformatie opzoeken?',
        options: [
          { key: 'car', value: 'Auto' },
          { key: 'motorcycle', value: 'Motor' },
          { key: 'scooter', value: 'Scooter' },
        ],
        step: 1,
        required: true,
        vehicle: ""
      }),
      // car type selector
      new DropdownQuestion({
        key: 'vehicleType',
        label: 'Welk type auto hebt u?',
        options: [
          { key: 'hatchback', value: 'Hatchback' },
          { key: 'sedan', value: 'Sedan' },
          { key: 'station', value: 'Station' },
          { key: 'cabriolet', value: 'Cabriolet' },
          { key: 'coupé', value: 'Coupé' },
          { key: 'mpv', value: 'Multi Purpose Vehicle (MVP)' },
          { key: 'terreinauto', value: 'Terreinauto' },
        ],
        step: 2,
        required: true,
        vehicle: "car"
      }),
      // motorcycle type selector
      new DropdownQuestion({
        key: 'vehicleType',
        label: 'Welk type motor hebt u?',
        options: [
          { key: 'all-road', value: 'All-road' },
          { key: 'naked', value: 'Naked' },
          { key: 'enduro', value: 'Enduro' },
          { key: 'race', value: 'Race' },
          { key: 'toermotor', value: 'Toermotor' },
          { key: 'chopper', value: 'Chopper' },
          { key: 'zijspan', value: 'Zijspan' },
        ],
        step: 2,
        required: true,
        vehicle: "motorcycle"
      }),

      new TextboxQuestion({
        key: 'licensePlateNumber',
        label: 'Vul het kenteken van uw voertuig in.',
        type: 'text',
        errorHeader: 'Oeps, het ingevoerde kenteken is niet geldig.',
        errorMessage: 'Gebruik het volgende formaat AA-12-BB.',
        required: true,
        step: 3
      }),
    ];
  };
}
