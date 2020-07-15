package com.app;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.app.dao.QuizDAO;
import com.app.model.Quiz;

@SpringBootApplication
public class SpringBootQuizAppApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootQuizAppApplication.class, args);
	}
	
	@Bean
    public CommandLineRunner demoData(QuizDAO dao) {
        return args -> { 
            dao.save(new Quiz("Full form of JS is: ", "Json Script", "Jan Skype", "Jigsaw Scape","Java Script", 4));
            dao.save(new Quiz("The numbering system with a radix of 16 is more commonly referred to as : ", "Hexadecimal", "Binary", "Duodecimal","Octal", 1));
            dao.save(new Quiz("This mobile OS held the largest market share in 2012", "Android", "iOS","BlackBerry","Symbian", 2));
            dao.save(new Quiz("How many values can a single byte represent?", "8", "1", "1024", "256", 1));
            dao.save(new Quiz("What does LTS stand for in the software market ? ", "Long Taco Service", "Long Term Support", "Ludicrous Transfer Speed", "Ludicrous Turbo Speed", 2));
            dao.save(new Quiz("HTML is what type of language ?", "Markup Language", "Macro Language", "Programming Language", "Scripting Language", 1));
            dao.save(new Quiz("Which computer language would you associate Django framework with ? ", "C#", "C++", "Python", "Java", 3));
            dao.save(new Quiz("What is the code name for the mobile operating system Android 7.0 ?","Ice Cream Sandwich", "Jelly Bean", "Marshmallow", "Nougat", 4));
            dao.save(new Quiz("Which sign of the zodiac is represented by the Crab ?", "Cancer", "Libra", "Virgo", "Sagittarius", 1));
            dao.save(new Quiz("What is the largest organ of the human body ? ", "Heart", "Skin", "Large Intestine", "Liver", 2));

        };
    }

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
	}

}
