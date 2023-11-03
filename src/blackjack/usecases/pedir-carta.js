
/**
 * Esta función coge una carta del deck y la retorna
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna una carta
 */
export const pedirCarta = (deck) => {

  if (!deck) throw new Error('deck es obligatorio');
  if (deck.length === 0) throw new Error("No hay cartas en el deck");

  const carta = deck.pop();
  return carta;
};