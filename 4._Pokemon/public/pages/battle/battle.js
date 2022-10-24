/* const pathVariables = location.pathname.split("/");

const pokemonName = pathVariables.pop(); */

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(result => {
        console.log(result.name);

        const pokemonImage = document.getElementById("pokemonImage");
        pokemonImage.src = result.sprites.other.dream_world.front_default;


        const iWon = Math.random() >= 0.5;
        const whoWon = document.getElementById("who-won");
        if (iWon) {
            whoWon.textContent = "I Won";
        } else {
            whoWon.textContent = "I lost";
        }

        const body = {
            pokemonBattled: result.name,
            iWon: iWon
        };

        fetch("/api/battles", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-type": "application/json" }
        })

    });



