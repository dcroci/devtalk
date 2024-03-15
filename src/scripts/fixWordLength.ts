//this function takes in word and a max number of characters, cuts off the string at that length of characters, and adds "..." to the end to signify that the word contains more characters than being shown in the UI
function fixWordLength(word: string, characters: number) {
  return word.length >= characters ? word.slice(0, characters) + "..." : word;
}

export default fixWordLength;
