/**
 * Obtiene el valor de la carta
 * @param {String} carta recibe la carta de la baraja 
 * @returns {Number} retrona el puntaje
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
