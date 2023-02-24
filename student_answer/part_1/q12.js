const q12 = `SELECT 
pokemon.pokedex_number AS 'N°', 
pokemon.name AS 'Nom du pokemon', 
ability.name as 'Nom du talent'
FROM pokemon
JOIN pokemon_type ON pokemon_type.pokemon_id = pokemon.pokemon_id
JOIN type ON type.type_id = pokemon_type.type_id
JOIN pokemon_ability ON pokemon_ability.pokemon_id = pokemon.pokemon_id
JOIN ability ON ability.ability_id = pokemon_ability.ability_id
WHERE type.name = 'Acier' and  pokemon_ability.is_hidden = 1
ORDER BY pokemon.pokedex_number`;

module.exports = q12;