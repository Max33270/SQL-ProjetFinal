const q7 = `SELECT pokemon.pokedex_number as 'N°', 
pokemon.name as 'Nom du pokemon', 
type1.name as 'Type 1', 
IFNULL(type2.name,'N/A') as 'Type 2'
FROM pokemon
LEFT JOIN pokemon_type as ty1 ON ty1.pokemon_id = pokemon.pokemon_id and ty1.slot = 1
LEFT JOIN pokemon_type as ty2 ON ty2.pokemon_id = pokemon.pokemon_id and ty2.slot = 2
LEFT JOIN type as type1 ON type1.type_id = ty1.type_id
LEFT JOIN type as type2 ON type2.type_id = ty2.type_id
ORDER BY pokemon.pokedex_number`;

module.exports = q7;