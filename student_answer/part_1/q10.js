const q10 = `SELECT pokemon_type.name AS "Type", 
best_qualities.name AS "Meilleure capacité", 
best_qualities.power AS "Meilleure puissance", 
worst_qualities.name AS "Pire capacité", 
worst_qualities.power AS "Pire puissance"
FROM type pokemon_type
JOIN move best_qualities
ON pokemon_type.type_id = best_qualities.type_id
AND best_qualities.power = (
    SELECT MAX(power) 
    FROM move 
    WHERE type_id = pokemon_type.type_id)
AND best_qualities.move_id = (
    SELECT MIN(move_id) 
    FROM move 
    WHERE type_id = pokemon_type.type_id 
    AND power = (
        SELECT MAX(power) 
        FROM move 
        WHERE type_id = pokemon_type.type_id)
        )
JOIN move worst_qualities
ON pokemon_type.type_id = worst_qualities.type_id
AND worst_qualities.power = (
    SELECT MIN(power) 
    FROM move 
    WHERE type_id = pokemon_type.type_id)
AND worst_qualities.move_id = (
    SELECT MIN(move_id) 
    FROM move 
    WHERE type_id = pokemon_type.type_id 
    AND power = (
        SELECT MIN(power) 
        FROM move 
        WHERE type_id = pokemon_type.type_id)
        )
ORDER BY pokemon_type.type_id`;

module.exports = q10;
