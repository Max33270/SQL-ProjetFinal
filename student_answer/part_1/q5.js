const q5 = `SELECT pokemon.pokedex_number AS 'N°',
pokemon.name AS 'Pokemon'
FROM pokemon
WHERE pokemon.pokemon_id IN (
    SELECT pokemon_ability.pokemon_id
    FROM pokemon_ability
    WHERE pokemon_ability.ability_id = (
        SELECT ability.ability_id
        FROM ability
        WHERE ability.name = 'Coloforce'))
ORDER BY pokemon.pokedex_number
        `;

module.exports = q5;
