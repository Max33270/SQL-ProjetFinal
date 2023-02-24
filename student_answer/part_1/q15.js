const q15 = `SELECT type.name AS 'Type',
IFNULL(SUM(CASE 
    WHEN pokemon.pokedex_number BETWEEN 1 AND 151 
    THEN base_stat.hp + base_stat.attack + base_stat.defense + base_stat.spe_attack + 
    base_stat.spe_defense + base_stat.speed END)/NULLIF(
        COUNT(DISTINCT CASE 
            WHEN pokemon.pokedex_number BETWEEN 1 AND 151 
            THEN pokemon.pokemon_id END),0),0) 
            AS 'Moyenne gen 1 total stat',
SUM(CASE 
    WHEN pokemon.pokedex_number BETWEEN 252 AND 386 
    THEN base_stat.hp + base_stat.attack + base_stat.defense + base_stat.spe_attack + 
    base_stat.spe_defense + base_stat.speed END)/NULLIF(
        COUNT(DISTINCT CASE 
            WHEN pokemon.pokedex_number BETWEEN 252 AND 386 
            THEN pokemon.pokemon_id END),0) 
            AS 'Moyenne gen 3 total stat',
SUM(CASE 
    WHEN pokemon.pokedex_number BETWEEN 494 AND 649 
    THEN base_stat.hp + base_stat.attack + base_stat.defense + base_stat.spe_attack + 
    base_stat.spe_defense + base_stat.speed END)/NULLIF(
        COUNT(DISTINCT CASE 
            WHEN pokemon.pokedex_number BETWEEN 494 AND 649 
            THEN pokemon.pokemon_id END),0) AS 'Moyenne gen 5 total stat',
SUM(CASE 
    WHEN pokemon.pokedex_number BETWEEN 722 AND 807 
    THEN base_stat.hp + base_stat.attack + base_stat.defense + base_stat.spe_attack + 
    base_stat.spe_defense + base_stat.speed END)/NULLIF(
        COUNT(DISTINCT CASE 
            WHEN pokemon.pokedex_number BETWEEN 722 AND 807 
            THEN pokemon.pokemon_id END),0) AS 'Moyenne gen 7 total stat'
FROM type
JOIN pokemon_type ON type.type_id = pokemon_type.type_id
JOIN pokemon ON pokemon.pokemon_id = pokemon_type.pokemon_id
JOIN base_stat ON base_stat.pokemon_id = pokemon.pokemon_id
GROUP BY type.name
ORDER BY type.type_id`;

module.exports = q15;
