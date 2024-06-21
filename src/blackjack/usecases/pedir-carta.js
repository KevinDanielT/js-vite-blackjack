// Esta función me permite tomar una carta
/**
 * Devuelve una carta de la baraja
 * @param {Array<String>} baraja es un arreglo de string
 * @returns {String} retorna la carta de la baraja
 */
export const pedirCarta = ( baraja ) => {

    if ( !baraja || baraja.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }

    const carta = baraja.pop();
    return carta;

}
