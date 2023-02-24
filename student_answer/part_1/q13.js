const q13 = `SELECT pokemon.name AS 'Nom du pokemon', 
COUNT(move.type_id) AS 'Nombre capacité avec le même type'
FROM pokemon 
LEFT JOIN pokemon_move ON pokemon_move.pokemon_id = pokemon.pokemon_id
LEFT JOIN move ON move.move_id = pokemon_move.move_id
LEFT JOIN pokemon_type ON pokemon_type.pokemon_id = pokemon.pokemon_id
WHERE move.type_id = pokemon_type.type_id
GROUP BY pokemon.pokemon_id
ORDER BY  COUNT(move.type_id)DESC, pokemon.name
LIMIT 10`;

module.exports = q13;