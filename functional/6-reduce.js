const countWords = inputWords => inputWords.reduce((counter, word) => {
     var p = word;
     counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
     return counter;
 }, {})

 module.exports = countWords

// Oficial solution:
/*
function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
} */
