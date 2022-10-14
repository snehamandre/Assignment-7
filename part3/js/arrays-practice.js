//STEP 1
console.log("STEP 1");
var movieList = ["Matrix", "Harry Potter", "Arrival", "Avengers", "Spider Man"];
window.console.log(movieList[1]);

//STEP 2
console.log("\nSTEP 2");
var movies = new Array(5);
movies[0] = "Matrix";
movies[1] = "Harry Potter";
movies[2] = "Arrival";
movies[3] = "Avengers";
movies[4] = "Spider Man";
window.console.log(movies[0]);

//STEP 3
console.log("\nSTEP 3");
movies = new Array(5);
movies[0] = "Matrix";
movies[1] = "Harry Potter";
movies[2] = "Arrival";
movies[3] = "Avengers";
movies[4] = "Spider Man";
movies.splice(2, 0, "Bridge of Spies");
window.console.log(movies.length);

//STEP 4
console.log("\nSTEP 4");
movies = [];
for (var i = 0; i < movieList.length; i++) {
    movies.push(movieList[i]);
}
delete movies[0];
window.console.log(movies);

//STEP 5
console.log("\nSTEP 5");
movies = [];
movies.push("Matrix");
movies.push("Harry Potter");
movies.push("Arrival");
movies.push("Avengers");
movies.push("Spider Man");
movies.push("Bridge of Spies");
movies.push("Captain America");
for (var i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}

//STEP 6
console.log("\nSTEP 6");
movies = [];
movies.push("Matrix");
movies.push("Harry Potter");
movies.push("Arrival");
movies.push("Avengers");
movies.push("Spider Man");
movies.push("Bridge of Spies");
movies.push("Captain America");
for (var i in movies) {
    window.console.log(movies[i]);
}

//STEP 7
console.log("\nSTEP 7");
var movies7 = [];
movies7.push("Matrix");
movies7.push("Harry Potter");
movies7.push("Arrival");
movies7.push("Avengers");
movies7.push("Spider Man");
movies7.push("Bridge of Spies");
movies7.push("Captain America");
movies7.sort();
for (var i in movies7) {
    window.console.log(movies7[i]);
}

//STEP 8
console.log("\nSTEP 8");
movies = [];
movies.push("Matrix");
movies.push("Harry Potter");
movies.push("Arrival");
movies.push("Avengers");
movies.push("Spider Man");
movies.push("Bridge of Spies");
movies.push("Captain America");
var leastFavMovies = ["Gardians of galaxy", "Thor2", "Thor4"];
window.console.log("\nMovies I like\n\n");
for (var i in movies) {
    window.console.log(movies[i]);
}
window.console.log("\nMovies I regret watching\n\n");
for (var i in leastFavMovies) {
    window.console.log(leastFavMovies[i]);
}

//STEP 9
console.log("\nSTEP 9");
movies = [];
movies.push("Matrix");
movies.push("Harry Potter");
movies.push("Arrival");
movies.push("Avengers");
movies.push("Spider Man");
movies.push("Bridge of Spies");
movies.push("Captain America");
var leastFavMovies = ["Gardians of galaxy", "Thor2", "Thor4"];
var movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies);

//STEP 10
console.log("\nSTEP 10");
movies = [];
movies.push("Matrix");
movies.push("Harry Potter");
movies.push("Arrival");
movies.push("Avengers");
movies.push("Spider Man");
movies.push("Bridge of Spies");
movies.push("Captain America");
var leastFavMovies = ["Gardians of galaxy", "Thor2", "Thor4"];
var movies = movies.concat(leastFavMovies);
movies.sort().reverse();
var lastItem = movies.pop();
window.console.log(lastItem);
