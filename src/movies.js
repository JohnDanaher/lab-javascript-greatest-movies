// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const getDirectors = moviesArray.map(a => a.director);

return getDirectors.filter((a, b) => getDirectors.indexOf(a) == b);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const getSteven = moviesArray.filter(movies => movies.director == "Steven Spielberg");
    const getDrama = getSteven.filter(n => n.genre.includes('Drama'))
    return getDrama.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length == 0){
        return 0;
    } else {
        const getScores = moviesArray.map(a => a.score? a.score : 0);
        const combineScores = getScores.reduce((a, b) => a + b);

         if((combineScores / moviesArray.length) - Math.floor((combineScores / moviesArray.length)) == 0){
            return Math.round(combineScores / moviesArray.length);
        } else {
            return +(combineScores / moviesArray.length).toFixed(2);
        }
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let importantBits = [];
    for(let i = 0; i < moviesArray.length; i++){
        if(moviesArray[i].genre.every( e => e === 'Drama' )){
            importantBits.push(moviesArray[i].score)
        }
    } 
    return +(importantBits.reduce((a, b) => a+b) / importantBits.length).toFixed(2);  
   }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return sortedMovieArray = [...moviesArray].sort((a, b) => a.year - b.year); 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map((movie) => movie.title);
    const firstTwenty= titles.slice(0,20);
    return firstTwenty.sort();
  }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
