import { Question } from './question';

export class TextboxQuestion extends Question<string> {
  override controlType = 'textbox';
}
