const Node = require('./Node');

class Trie {
  constructor(length, head) {
    this.length = length;
    this.head = head || null;
    this.total = 0;
    this.wordList = [];
  }

  count() {
    return this.total;
  }

  insert(word) {
    this.total++;
    let wholeWord = word; //needed for assigning to last word
    let splitWord = word.toLowerCase().split('');
    // console.log(splitWord);// [h, e, y];
    
    let testNode = this.head; 
    // console.log(testNode); //null
    
    if (!this.head) {
      this.head = new Node(); 
      testNode = this.head;
      // console.log(testNode); // Node { data: null, children: {}, lastLetter: false }
    }

    splitWord.forEach((letter, index) => {
      if (index === splitWord.length - 1) {
        if (testNode.children[letter]) {
          testNode = testNode.children[letter];
          return;
        } else {
          testNode.children[letter] = new Node(letter, true, wholeWord);
          // console.log(testNode); // see line 44
          testNode = testNode.children[letter];
          return;
        }  
      }  
      if (testNode.children[letter]) {
        testNode = testNode.children[letter];
      } else {
        testNode.children[letter] = new Node(letter);
        // console.log(testNode); // see line 44
        testNode = testNode.children[letter];
      }
    });
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word);
    });
  }
  

  suggest(letters) {
    this.wordList = [];
    let splitLetters = letters.toLowerCase().split('');

    let currentNode = this.traverseTrie(splitLetters);
    
    this.findLast(currentNode.children);
    return this.wordList;
  }

  findLast(childrenObj) {
    let array = Object.keys(childrenObj);

    array.forEach(letter => {
      let newNode = childrenObj[letter];

      if (newNode.lastLetter === true) {
        this.wordList.push(newNode.word);
      }
      this.findLast(newNode.children);
    });
  }

  traverseTrie(array) {
    let currentNode = this.head;

    array.forEach(letter => {
      if (currentNode.children[letter]) {
        currentNode = currentNode.children[letter];
      }
    });
    return currentNode;
  }
}

module.exports = Trie;