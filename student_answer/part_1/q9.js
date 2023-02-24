const q9 = `SELECT type.name as 'Type', 
move.name as 'Capacité', 
move.power as 'Puissance', 
move.accuracy as 'Précision', 
move.description as 'Description'
FROM move
INNER JOIN type ON move.type_id = type.type_id
WHERE move.power > 100 AND move.accuracy >= 90 AND move.description NOT LIKE '% tour %'
ORDER BY move.power DESC`; 

module.exports = q9;
