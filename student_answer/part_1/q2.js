const q2 = `SELECT pokemon.name AS 'Pokemon', 
pokemon.height || ' ' ||  'm' AS 'Taille',
pokemon.weight || ' ' || 'kg' AS 'Poids' 
FROM pokemon 
WHERE pokemon.height = (
    SELECT pokemon.height 
    FROM pokemon 
    WHERE pokemon.pokemon_id = 542) 
ORDER BY pokemon.weight`;

module.exports = q2;