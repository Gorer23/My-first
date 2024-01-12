"use strict"; //только в начале,помогает ликвидировать ошибки в коде

// alert(1);

// const result = confirm("Are you here");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(answer);

// const answers = [];

// answers[0]= prompt("What's your name?", "");
// answers[1]= prompt("What's your second name?", "");
// answers[2]= prompt("What's your age?", "");

// document.write(answers);  //устаревшая тема для тестов

// console.log(null);

// const numberOfFilms=[];
// numberOfFilms[0]= prompt("how many film your watch?", "");
// console.log(numberOfFilms[0]);

const numberOfFilms = +prompt("How many films have you watched?", "");
console.log(numberOfFilms);
let personalMovieDB = {
    count:(numberOfFilms), // Convert the input to a number using parseInt
     movies: {},
     actors: {},
    genres: {},
    privat: false
     }
     const a =prompt("What's your last film?", ""),
           b=  prompt("What's your rating?", "");
           personalMovieDB.movies[a]=a;
           personalMovieDB.movies[b]=b;
           console.log(personalMovieDB);
     
// const numberOfFilms2 = [];
// numberOfFilms2[0] = prompt("What's your last film?", "");
// numberOfFilms2[1] = prompt("What's your rating?", "");

// let personalMovieDB = {
//     count:(numberOfFilms), // Convert the input to a number using parseInt
//     movies: [numberOfFilms2[0],numberOfFilms2[1]],
//     actors: {},
//     genres: {},
//     privat: false
// };

// console.log(personalMovieDB.movies);
