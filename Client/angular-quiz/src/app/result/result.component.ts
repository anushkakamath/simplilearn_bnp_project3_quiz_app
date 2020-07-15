import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private router:Router, private quizService: QuizService) { }

  ngOnInit() {
    if (parseInt(localStorage.getItem('qnProgress')) == 10) {
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));

      this.quizService.getAnswers().subscribe(
        (data: any) => {
          this.quizService.correctAnswerCount = 0;
          this.quizService.qns.forEach((e, i) => {
            if (e.answer == data[i])
            this.quizService.correctAnswerCount++;
            e.correct = data[i];
          });
        }
      );
    }
    else
      this.router.navigate(['/quiz']);
  }

  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    this.router.navigate(['/quiz']);
  }

}
