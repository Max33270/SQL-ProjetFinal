const q1 = `SELECT pokemon.pokedex_number AS 'N°', 
pokemon.name AS 'Pokemon', 
pokemon.description AS 'Description' 
FROM pokemon WHERE LENGTH(description) < 75 
ORDER BY pokedex_number`;

module.exports = q1;

