import { Question } from './question';

export class DropdownQuestion extends Question<string> {
  override controlType = 'dropdown';
}
