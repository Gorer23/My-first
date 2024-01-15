

'use strict';
// function showMyDB(personal){
//    if(personalMovieDB.privat===false){
//       console.log(personalMovieDB);
//    }
//    else{
//       console.log("Privat is active");
//    }
// }
let numberOfFilms;

function start(){
   numberOfFilms= +prompt("How many films have you watched?", "");
   while(numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms= +prompt("How many films have you watched?", "");
   }
}

start();




let personalMovieDB = {
    count:(numberOfFilms), // Convert the input to a number using parseInt
     movies: {},
     actors: {},
    genres:{},
    privat: true
     }

   // showMyDB();


   function writeYourGenres(){
      for(let i=1;i<=numberOfFilms;i++){
         personalMovieDB.genres[i-1] = prompt("Ваш любимый жанр под номером " + `${i}`);;
      }
      
   }
   writeYourGenres();

    

     function rememberMyFilms(){
      let i =1;
         while(i<2){
            i++;
        const a =prompt("What's your last film?", ""),
             b=  prompt("What's your rating?", "");
             if ( a!=null && b!=null && a!='' && b!=''&& a.length<50 ) {
                personalMovieDB.movies[a]=b;
             } else{
                console.log("error");
                i--;
             }
     }
     }
     rememberMyFilms();
     
     function detectPersonalLvl(){
      if(personalMovieDB.count<10){
         console.log("Просмотрено довольно мало фильмов");
      }
      else if(personalMovieDB.count>10&&personalMovieDB.count<30){
         console.log("Вы классический зритель");
      }
      else if(personalMovieDB.count>30){
         console.log("Вы киноман");
      }
      else{
         console.log("Error");
      }
     }
     detectPersonalLvl();

console.log(personalMovieDB);

