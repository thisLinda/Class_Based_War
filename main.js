// create cards
class Card {
  constructor(cardNum, suit, value) {
    this.cardNum = cardNum;
    this.suit = suit;
    this.value = value;
  }
}

// get a deck
class Deck {
  constructor() {
    this.deckArray = [];
    // suits is not part of the deck object, don't use keyword this
    const cardNums = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let suit in suits) {
      for (let cardNum in cardNums) {
          this.deckArray.push(new Card(cardNums[cardNum], suits[suit], values[cardNum]));
        }
    }
    // sort() sorts the elements of an array in place and returns it
    this.deckArray.sort(() => Math.random() - 0.5);
  }
}

// create player
class Player {
  constructor(playerName) {
    this.playerName = playerName;
    this.score = 0;
    this.hand = [];
  }
  // dealCards is a method of the player class, in order to use it it always needs to be attached to a SPECIFIC player and called
  dealCards(halfOfDeck){
    for (let i = 0; i < 26; i++) {
      // this.hand (below) will represent the SPECIFIC player when instantiated
      this.hand.push(halfOfDeck[i]);
    }
  }
}

function playGame() {
  let deck = new Deck();
  let player1 = new Player('Linda');
  let player2 = new Player('notLinda');
  player1.dealCards(deck.deckArray.slice(0,26));
  player2.dealCards(deck.deckArray.slice(26));
  for (let i = 0; i < player1.hand.length; i++) {
    if (player1.hand[i].value > player2.hand[i].value) {
      player1.score += 1;
      console.log(`${player1.hand[i].cardNum} of ${player1.hand[i].suit} > ${player2.hand[i].cardNum} of ${player2.hand[i].suit}, ${player1.playerName} gets 1 point`);
    }
    if (player1.hand[i].value < player2.hand[i].value) {
      player2.score += 1;
      console.log(`${player2.hand[i].cardNum} of ${player2.hand[i].suit} > ${player1.hand[i].cardNum} of ${player1.hand[i].suit}, ${player2.playerName} gets 1 point`);
    }
    else {
      console.log(`${player1.hand[i].cardNum} of ${player1.hand[i].suit} = ${player2.hand[i].cardNum} of ${player2.hand[i].suit}, it\'s a tie, no one gets a point`);
    }
  }

  if (player1.score > player2.score) {
    console.log(`${player1.playerName} wins with ${player1.score} points!`);
  }
  if (player2.score > player1.score) {
    console.log(`${player2.playerName} wins with ${player2.score} points!`);
  } else {
    console.log(`It\'s a tie :|`)
  }
}
playGame();