import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  readonly rootUrl = "http://localhost:9100"
  qns:any[];
  qnProgress:number;
  correctAnswerCount: number =0;

  constructor(private http:HttpClient) { }

  getQuestions(){
    return this.http.get(this.rootUrl + '/questions');
  }

  getAnswers() {
    return this.http.get(this.rootUrl + '/answers');
  }

}
