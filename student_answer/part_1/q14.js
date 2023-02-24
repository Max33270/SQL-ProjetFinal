const q14 = `SELECT type.name as 'Type',
(SELECT pokemon.name FROM pokemon_type 
    LEFT JOIN pokemon ON pokemon_type.pokemon_id = pokemon.pokemon_id 
    LEFT JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id 
    WHERE type.type_id = pokemon_type.type_id 
    ORDER BY base_stat.hp DESC LIMIT 1) as 'HP',
(SELECT pokemon.name FROM pokemon_type 
    LEFT JOIN pokemon ON pokemon_type.pokemon_id = pokemon.pokemon_id 
    LEFT JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id 
    WHERE type.type_id = pokemon_type.type_id 
    ORDER BY base_stat.attack DESC LIMIT 1) as 'Attaque',
(SELECT pokemon.name FROM pokemon_type 
    LEFT JOIN pokemon ON pokemon_type.pokemon_id = pokemon.pokemon_id 
    LEFT JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id 
    WHERE type.type_id = pokemon_type.type_id 
    ORDER BY base_stat.defense DESC LIMIT 1) as 'Défense',
(SELECT pokemon.name FROM pokemon_type 
    LEFT JOIN pokemon ON pokemon_type.pokemon_id = pokemon.pokemon_id 
    LEFT JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id 
    WHERE type.type_id = pokemon_type.type_id 
    ORDER BY base_stat.spe_attack DESC LIMIT 1) as 'Spé. Attaque',
(SELECT pokemon.name FROM pokemon_type 
    LEFT JOIN pokemon ON pokemon_type.pokemon_id = pokemon.pokemon_id 
    LEFT JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id 
    WHERE type.type_id = pokemon_type.type_id 
    ORDER BY base_stat.spe_defense DESC LIMIT 1) as 'Spé. Défense',
(SELECT pokemon.name FROM pokemon_type 
    LEFT JOIN pokemon ON pokemon_type.pokemon_id = pokemon.pokemon_id 
    LEFT JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id 
    WHERE type.type_id = pokemon_type.type_id 
    ORDER BY base_stat.speed DESC LIMIT 1) as 'Vitesse'
FROM type
GROUP BY type.type_id
ORDER BY type.type_id`;

module.exports = q14;