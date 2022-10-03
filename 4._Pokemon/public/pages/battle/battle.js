const pathVariables = location.pathname.split("/");

const pokemonName = pathVariables.pop();

console.log(pokemonName);

