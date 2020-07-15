package com.app.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.QuizDAO;
import com.app.model.Quiz;
import com.app.service.QuizService;

@Service
public class QuizServiceImpl implements QuizService{
	@Autowired
	private QuizDAO dao;
	@Override
	public List<Quiz> allQuestions() {
		
		return dao.findAll();
	}

}
