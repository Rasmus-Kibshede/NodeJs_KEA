const display_pokemons = document.getElementById("display_pokemons");

fetch("/api/pokemon")
.then(response => response.json())
.then(result => {
    result.data.results.forEach(pokemon => {
        //pokemonMap.set(pokemon.name, pokemon);
        //const pTag = document.createElement("p");
        pokemonMap.set(pokemon.name, pokemon.url);
        const pTag = document.createElement("p");
        pTag.textContent = pokemon.name;
        display_pokemons.appendChild(pTag);


        const battleLink = document.createElement("a");
        battleLink.setAttribute("href", `battle/${pokemon.name}`);
        const battleButton = document.createElement("button");
        battleButton.textContent = `Battle ${pokemon.name}`;
        battleLink.appendChild(battleButton);

        pTag.appendChild(battleLink);
    });
});

