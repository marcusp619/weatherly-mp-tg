//Node.js
class Node {
  constructor(data = null, lastLetter = false, word, children) {
    this.data = data;
    this.children = {} || children;
    this.lastLetter = lastLetter; // done looping change last letter to true
    this.word = word;
  }
}

module.exports = Node;