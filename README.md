# The Ring of Trivia

## Introduction

Welcome to the Ring of Trivia! This browser game is my take on a classic game of trivia. I was inspired to build this game because I enjoy going to trivia night at the bar, and wanted to build something fun to do at home. I build this trivia in a ring shape because I, the developer, have the last name "Ring." I also thought it could be a dynamic interface that could eventually become a timer or have other cool functionality.

## Controls

Each question will be in the middle of the ring in the middle of the screen. Every question is multiple-choice with four options of answers. The answers will be on the top, right, bottom, and left sides of the ring. Choose your answer by clicking on the option you believe is correct. If your choice is correct, the ring and answer will become green to let you know you are correct. If your choice is incorrect, the ring and your choice will become red, while the correct answer becomes green.

## Technologies Used for RoT

The trivia questions are provided by an API called Open Trivia Database (https://opentdb.com/). It pulls from all the categories available on the API for a wide-range of questions and categories.

## Files

The three main files in this project are app.js, index.html, and main.css. These are where the bulk of my work took place. One package was installed to this project named "he" that decoded the strings I received from the API into readable characters.

## Future Plans

Future plans for the game:

- Make ring a timer
- Give bonus points for getting multiple questions correct in a row
- Keep track of high scores
- Add flashing or other visual effects
