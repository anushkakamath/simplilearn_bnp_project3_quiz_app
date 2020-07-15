import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  constructor(private quizService: QuizService) { }

  ngOnInit() {
  }

}
