/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed Word.
 * @param {string} secretWord - Secret Word.
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split('');
  const guessedLetters = new Set(guessedWord);
  
  return secretLetters.filter(letter => guessedLetters.has(letter)).length
}
