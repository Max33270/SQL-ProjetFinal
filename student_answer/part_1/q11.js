const q11 = `SELECT pokemon.name AS 'Pokemon',
COUNT(move.name) AS 'Nombre de capacités'
FROM pokemon
INNER JOIN pokemon_move ON pokemon.pokemon_id = pokemon_move.pokemon_id
INNER JOIN move ON pokemon_move.move_id = move.move_id
GROUP BY pokemon.pokemon_id
ORDER BY COUNT(move.name) DESC
LIMIT 1`;

module.exports = q11;