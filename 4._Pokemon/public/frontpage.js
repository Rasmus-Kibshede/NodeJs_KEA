let pokemonMap = new Map();
await fetch("/pokemon")
    .then(res => res.json())
    .then(result => {
        result.data.forEach(pokemon => {
            pokemonMap.set(pokemon.name, pokemon);
            console.log(pokemon);
        });
});
