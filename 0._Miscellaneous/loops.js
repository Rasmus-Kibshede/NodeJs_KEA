const barbieMovies = [
    { name: "Swan lake", year: 2001 },
    { name: "Princess and the pauper", year: 2008 },
    { name: "Fairies", year: 2014 },
];

// forEach
// map, reduce, filter


const ratedBarbieMovies = barbieMovies.map(movie => {
    movie.rating = 10;
    return movie;
});

//console.log(ratedBarbieMovies);


const recentBarbieMovies = barbieMovies.filter(movie => movie.year > 2005);

console.log(recentBarbieMovies);

