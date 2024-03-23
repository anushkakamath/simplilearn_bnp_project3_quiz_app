## ONLINE TEST APPLICATION (PROJECT 3)                                                                          
BY ANUSHKA KAMATH                                                                                                                    15/07/2020
GitHub Link:  https://github.com/anushkakamath/simplilearn_bnp_project3_quiz_app.git

# DESCRIPTION:
This project consists of a backend (server) Rest API built using Spring Boot with an embedded H2 database that contains the questions of the quiz along with 4 options and the correct answer stored. The data / questions from this database is displayed on the Front-end which is a web application built with Angular9. 
On opening the application:
1.	The user is redirected to the homepage that asks the user to enter his name and click on start the quiz button. This also contains a validation that doesn’t allow user to proceed until he enters his name
2.	On clicking the “Take the quiz” button user is directed to the quiz component of the Angular. It displays the question along with the options, it takes user to the next question when he chooses his option of choice.
3.	After answering all the 10 questions the user is directed to the results component of the Angular that shows the result of the user.  The user is also allowed to review the answers if he scrolls which shows the user the questions along with the correct answer.
4.	This result page also contains a retry button that allows the user to start a new quiz. The application also contains a Nav that gives an option to start a new quiz.

# ANGULAR APPLICATION:
The angular application contains the following components:
1.	Register: as the homepage of the application which asks for user name and on clicking the Start Quiz button routes to the quiz component.
2.	Quiz: Quiz component displays the questions that are entered in the database using Http client that connects to the backend using the get http method. The options chosen by the user are also recorded to display the result in the next component on the completion of the quiz.
3.	Result: This displays the result of the user after the quiz is completed and shows a review of the answers to display the options chosen by the user and the correct answer, all of which is fetched from the backend. It shows the result along with retry button to start the quiz again.
4.	Nav: It also contains a nav bar component to restart the quiz whenever needed.
5.	Service: The quiz.service component is responsible for fetching the http get requests from the server using HttpClient Module of the angular.

Thus, after the user enters his/her name and starts the quiz. The questions and corresponding options are fetched from the Spring boot application and the options chosen by the user are recorded in the local storage. These answers are compared with the correct answer column from the backend database to display the result score to the user along with the review of the answers. The quiz questions and options are all given the client from the user in the json form which is then displayed from the html files.

# HOW TO RUN THE PROJECT
# RUN THE SERVER:
The server is made of a Spring Boot Restful API that contains an embedded h2 database that stores the quiz questions to be displayed.  Once the project is run, it inserts the quiz questions along with the options and correct answer into the database using a CommandLineRunner interface.
In order to run the server, follow these steps:
1.	Open the Spring Boot project titled “spring_boot_quiz_app” in Spring Tool Suite.
2.	Go to the Spring boot dashboard and run the Spring Boot project. This runs the server on localhost port 9100.
3.	After this client may be run to use the quiz Application.

# TO ACCESS THE DATABASE / VIEW H2 CONSOLE: 
The necessary configurations for accessing this have been added to the app application.properties file.
1.	Open the link: localhost:9100/h2 
2.	Change the JDBC URL from what’s obtained on the console (jdbc:h2:mem:testdb)
3.	Click on Connect. This opens the H2 database for viewing.

# TO TEST THE SPRING BOOT RESTFUL API
1.	Open Postman tool
2.	Enter the link: localhost:9100
3.	To view the questions in the database: go to “get” and enter the URI “/questions” i.e. “http://localhost:9100/questions”

# RUN THE CLIENT:
To run the client (Angular App) follow these steps:
1.	Firstly, paste the node_modules folder for angular into the angular-quiz folder as this is not uploaded with the project but is essential for running the application.
2.	Open the angular app folder titled “angular-quiz” in Visual Studio code. 
3.	Open terminal in the VS Code.
4.	Go to the folder to run the code i.e. cd angular-quiz
5.	To build and run the application: “ng s  - -o  “ or “ng serve  - - open”
6.	This opens the application on the default browser. Enter your name and start the quiz. Take the quiz and view the results and review your answers. Click on try again or Start new quiz on the nav bar to retake the quiz.
7.	It runs the project on localhost port 4200. It redirects to the /register page as the homepage of the application i.e. “http://localhost:4200/register”


## APPROACH 2:
The online test application has also been implemented in another simpler approach without using database and backend server. It used a web API to generate a json file of the questions which is then displayed on the web application. This project has been implemented with another approach using HTML, CSS, JavaScript. To run this simply click on the index.html file. It takes questions that are autogenerated each time page is reloaded using an online web api. 
![image](https://github.com/anushkakamath/simplilearn_bnp_project3_quiz_app/assets/67267760/61dc1f52-a43f-4997-9a38-f3bf3165e645)
