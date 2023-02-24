const q3 = `SELECT move.name AS 'Nom',
move.category AS 'Catégorie',
move.power AS 'Puissance',
move.pp AS 'Point de pouvoir',
move.accuracy AS 'Précision',
move.description AS 'Description'
FROM move 
WHERE move.type_id = (
    SELECT type.type_id
    FROM type
    WHERE type.name = 'Roche')
ORDER BY move.category`;

module.exports = q3;
