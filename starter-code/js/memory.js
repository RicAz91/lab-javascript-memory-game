class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    
    // Add the rest of the properties here
  }

  shuffleCards() {
    // ...
    let count = this.cards.length;
    let tempX;
    while(count){
      tempX = this.cards.splice(Math.floor(Math.random()*count),1);
      this.cards.splice(count, 0, tempX[0]);
      count -=1
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2){
    this.pairsGuessed++
    return true
    }
    return false
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2){
      return true
    }
    return false
  }
}
