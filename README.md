# Trivia Amico

[Trivia Amico Demo](http://triviaamico.herokuapp.com/)
[Trivia Amico Github Front-end](https://github.com/cmlavin/TriviaAmico)
[Trivia Amico Github Back-end](https://github.com/cmlavin/TriviaAmicoAPI)

Trivia Amico is a full stack web application trivia game.  
The server is built using Ruby on Rails with a PostgreSQL database to persist user data, game data, and scores.  The front-end is built with React and styled using Semantic UI React and custom CSS.

## Features

* Account creation and user authentication
  * Passwords are encrypted using the bcrypt gem
  * JWT is used to keep users logged in
* Leaderboard keeps track of the top 10 high scores
  * Checks for high score updates after every game
* Fetch API used for AJAX functionality to allow communication between the front-end and back-end
* Trivia questions and answers are requested from an external API
* Timer
* Mixture of smart and presentational components

## Gameplay

After a player signs up or logs in to their account, they choose a category, difficulty, the number of questions, and the type of questions for the game.  Once the game starts the player will need to answer all of the questions before time runs out, otherwise the game will be over. The amount of time is based on the number of questions in the game with 10 seconds allotted per question.  The number of points awarded per question depends on the difficulty of the game; 400 points per easy question, 800 points per medium question, and 1200 points per hard question.

## API Reference

This project uses trivia data from the Open Trivia Database (https://opentdb.com/).
