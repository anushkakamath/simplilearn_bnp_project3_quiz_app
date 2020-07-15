import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router:Router, private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.qnProgress= 0;
    this.quizService.getQuestions().subscribe(
      (data:any) =>{
        this.quizService.qns = data;

      }
    )
  }
  Answer(id, choice) {
    this.quizService.qns[this.quizService.qnProgress].answer = choice;
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == 10) {
      this.router.navigate(['/result']);
    }
  }

}
