package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Quiz;
import com.app.service.QuizService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class QuizController {


	@Autowired
	private QuizService service;
	
	@GetMapping("/questions")
	public List<Quiz> allQuestions(){
		return service.allQuestions();
	}
	
	@GetMapping("/answers")
	public ArrayList<Integer> getAnswers(){
		ArrayList<Integer> answerList = new ArrayList<Integer>();
		answerList.add(4);
		answerList.add(1);
		answerList.add(2);
		answerList.add(1);
		answerList.add(2);
		answerList.add(1);
		answerList.add(3);
		answerList.add(4);
		answerList.add(1);
		answerList.add(2);
		return answerList;
		
	}
	
}
