let pokemonMap = new Map();
/*await fetch("/pokemon")
    .then(res => res.json())
    .then(result => {
        result.data.forEach(pokemon => {
            pokemonMap.set(pokemon.name, pokemon);
            console.log(pokemon);
        });
});*/


const display_pokemons = document.getElementById("display_pokemons");


fetch("/api/pokemon")
.then(response => response.json())
.then(result => {
    result.data.results.forEach(pokemon => {
        //pokemonMap.set(pokemon.name, pokemon);
        const pTag = document.createElement("p");
        pTag.textContent = pokemon.name;
        display_pokemons.appendChild(pTag);
    });
});

