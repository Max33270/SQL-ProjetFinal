const q16 = `SELECT ability.name AS 'Talent',
(SELECT SUM(
    CASE 
    WHEN pokemon_ability.ability_id = ability.ability_id 
    THEN 1 ELSE 0 END)
FROM pokemon
JOIN pokemon_ability ON pokemon_ability.pokemon_id = pokemon.pokemon_id) 
AS 'Nombre possédant le talent',
(SELECT type.name
FROM type
JOIN pokemon_type ON pokemon_type.type_id = type.type_id
JOIN pokemon_ability ON pokemon_type.pokemon_id = pokemon_ability.pokemon_id 
AND pokemon_ability.ability_id = ability.ability_id
GROUP BY type.type_id
ORDER BY COUNT(type.type_id) DESC
LIMIT 1) AS 'Type possédant le plus le talent',
(SELECT round(((SUM(
    CASE 
    WHEN pokemon_ability.ability_id = ability.ability_id 
    THEN 1 ELSE 0 END) * 100.00) /COUNT(DISTINCT pokemon.pokemon_id)),2) || '%'
FROM pokemon
JOIN pokemon_ability ON pokemon_ability.pokemon_id = pokemon.pokemon_id) 
AS 'Pourcentage possession',
(SELECT CASE 
    WHEN ROUND(((SUM(CASE 
        WHEN pokemon_ability.ability_id = ability.ability_id 
        AND pokemon_ability.is_hidden = 1 
        THEN 1 ELSE 0 END) * 100.00) / 
        SUM(CASE 
            WHEN pokemon_ability.ability_id = ability.ability_id 
            THEN 1 ELSE 0 END)),2) || 
        '%' = '0.0%' THEN '0%'  
        ELSE ROUND(((SUM(
            CASE 
            WHEN pokemon_ability.ability_id = ability.ability_id 
            AND pokemon_ability.is_hidden = 1 THEN 1 ELSE 0 END) * 100.00) / 
            SUM(CASE WHEN pokemon_ability.ability_id = ability.ability_id THEN 1 ELSE 0 END)),2) 
            || '%'  END
FROM pokemon_ability) 
AS 'Pourcentage possession cachée',
(SELECT ROUND(SUM(
    CASE 
    WHEN pokemon_ability.ability_id = ability.ability_id 
    THEN 1 ELSE 0 END) * 100.00 /  SUM(CASE 
        WHEN pokemon_ability.ability_id = pok_ability.ability_id 
        THEN 1 ELSE 0 END),2) || '%' 
FROM pokemon
JOIN pokemon_ability ON pokemon_ability.pokemon_id = pokemon.pokemon_id
JOIN ability pok_ability ON pok_ability.ability_id = (SELECT ability.ability_id 
    FROM ability JOIN pokemon_ability ON ability.ability_id = pokemon_ability.ability_id 
    GROUP BY ability.ability_id 
    ORDER BY COUNT(pokemon_ability.pokemon_id) DESC LIMIT 1)) 
    AS 'Pourcentage par rapport au talent le plus possédé'
FROM ability
JOIN pokemon_ability ON pokemon_ability.ability_id = ability.ability_id
GROUP BY ability.ability_id
HAVING SUM(CASE 
    WHEN pokemon_ability.ability_id = ability.ability_id 
    THEN 1 ELSE 0 END) >0
ORDER BY ability.name`;

module.exports = q16;
