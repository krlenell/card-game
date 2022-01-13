import React from 'react';

type Card = {
  suit: string
  value: string
  pair: null | 'pair0' | 'pair1'
}

type Deck = Card[]

type Hand = {
  cards: Card[],
  pairs: number
}

const createDeck = (): Deck => {
  const deck: Deck = []
  const suits = ['spade', 'heart', 'diamond', 'club']
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  for(let i = 0; i < suits.length; i++){
    for(let j = 0; j < values.length; j++){
      const card: Card = {
        suit: suits[i],
        value: values[j],
        pair: null
      }
      deck.push(card)
    }
  }
  const shuffled = shuffleDeck(deck)
  return shuffled
}

const shuffleDeck = (array: Deck): Deck => {
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

//doesn't handle 3 of a kind
const makeHands = (deck: Deck): [Hand, Hand] => {
  let i = 0
  const hand1: Hand = {cards: [], pairs: 0}
  const hand2: Hand = {cards: [], pairs: 0}
  let hand1Pair = false
  let hand2Pair = false
  while (i < 5) {

    //actually need to look through all previous cards in the deck
    const hand1Card = deck.shift()!
    for(let j = 0; j < hand1.cards.length; j++){
      if(!hand1.cards[j].pair){
        if(hand1Card.value === hand1.cards[j].value){
          hand1.pairs = hand1.pairs + 1
          if(!hand1Pair){
            hand1Card.pair = 'pair0'
            hand1.cards[j].pair = 'pair0'
            hand1Pair = true
          } else {
            hand1Card.pair = 'pair1'
            hand1.cards[j].pair = 'pair1'
          }
        }
      }
    }
    hand1.cards.push(hand1Card)

    //would like to make this into two functions but because pulling from same stack it is difficult
    const hand2Card = deck.shift()!
    for(let j = 0; j < hand2.cards.length; j++){
      if(hand2.cards[j].pair){
        if(hand2Card.value === hand2.cards[j].value){
          hand2.pairs = hand2.pairs + 1
          if(!hand2Pair){
            hand2Card.pair = 'pair0'
            hand2.cards[j].pair = 'pair0'
            hand2Pair = true
          } else {
            hand2Card.pair = 'pair1'
            hand2.cards[j].pair = 'pair1'
          }
        }
      }
    }
    hand2.cards.push(hand2Card)

    i++
  }
  return [hand1, hand2]
}


const App = () => {
  const deck = createDeck()
  console.log(deck)
  const [hand1, hand2] = makeHands(deck)
  console.log(hand1)

  console.log(hand2)
  let winner
  if(hand1.pairs > hand2.pairs){
    winner = hand1
  } else if (hand1.pairs < hand2.pairs){
    winner = hand2
  }

  return (
    <div className="App">
      <header className="App-header">
        <section className={`hand`}>
          <h1>Player 1</h1>
            {/* <img
              src=`http://h3h.net/images/cards/${suit}_${value}.svg`
              className=`card ${pair}`
              alt="card"
            /> */}


        </section>

        <section className={`hand`}>
          <h1>Player 2</h1>
        </section>

        <section className="buttons">
          <button>Play Again</button>
        </section>
      </header>
    </div>
  );
}

export default App;
