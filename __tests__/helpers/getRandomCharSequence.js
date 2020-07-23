function getRandomCharSequence() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const wordLength = Math.floor(Math.random() * 10 + 1);
  let word = '';
  for (let i = 0; i < wordLength; i += 1) {
    word += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return word;
}

module.exports = getRandomCharSequence;
