const q8 = `SELECT 
type.name as 'Nom du type',
COUNT(DISTINCT pokemon_type.pokemon_id) as 'Nombre de pokemon',
SUM(CASE WHEN pokemon_type.slot = 1 THEN 1 ELSE 0 END) as 'Nombre de pokemon avec le type slot 1',
SUM(CASE WHEN pokemon_type.slot = 2 THEN 1 ELSE 0 END) as 'Nombre de pokemon avec le type slot 2'
FROM type
LEFT JOIN pokemon_type ON pokemon_type.type_id = type.type_id
GROUP BY type.name
ORDER BY COUNT(DISTINCT pokemon_type.pokemon_id) DESC, 
SUM(CASE WHEN pokemon_type.slot = 1 THEN 1 ELSE 0 END) DESC`;

module.exports = q8;
