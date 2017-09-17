## Table of Contents

- [Introduction](#introduction)
  - [Gameplay](#gameplay)
- [Technologies](#technologies)
- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [API Reference](#api-reference)

## Introduction

Trivia Amico is a single player trivia game.  

### `Gameplay`

After a player signs up or logs in to their account, they choose a category, difficulty, the number of questions, and the type of questions for the game.  Once the game starts the player will need to answer all of the questions before time runs out, otherwise the game will be over.  The amount of time is based on the number of questions in the game with 10 seconds allotted per question.  The number of points awarded per question depends on the difficulty of the game; 400 points per easy question, 800 points per medium question, and 1200 points per hard question.

## Technologies

* Ruby on Rails
* React.js
* PostgreSQL
* Semantic UI React

## Installation

This project requires both the backend and frontend to be running.

### `Backend`

Clone the repo at https://github.com/cmlavin/TriviaAmicoAPI.  Run ```bundle install``` and ```rails s``` to install all gems and start the server.

### `Frontend`

Clone this repo (https://github.com/cmlavin/TriviaAmico).  Run ```npm install``` and ```npm start``` to install all dependencies and start the server.

## API Reference

This project uses trivia data from the Open Trivia Database (https://opentdb.com/).
