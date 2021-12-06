import { Component } from '@angular/core';
import { QuestionServiceService } from './services/question-service/question-service.service';
import { Question } from './models/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionServiceService],
})
export class AppComponent {
  questions: Question<string>[];
  imagePath: string | null = "";
  constructor(service: QuestionServiceService) {
    this.questions = service.getQuestions();
  }

  setImagePath(path: string) {
    this.imagePath = path
  }
}
