import React from 'react';

type Card = {
  suit: string
  value: string
}

//type Deck<Card[52]>
//how to make a Deck type which contains an array of Card?

const createDeck = (): Card[] => {
  const deck: Card[] = []
  const suits = ['spade', 'heart', 'diamond', 'club']
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  for(let i = 0; i < suits.length; i++){
    for(let j = 0; j < values.length; j++){
      const card: Card = {
        suit: suits[i],
        value: values[j]
      }
      deck.push(card)
    }
  }
  const shuffled = shuffleDeck(deck)
  return shuffled
}

const shuffleDeck = (array: Card[]): Card[] => {
  //good ol' fisher yates
  let currentIndex = array.length,  randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }
  return array;
}


console.log(createDeck())


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world</p>
      </header>
    </div>
  );
}

export default App;
