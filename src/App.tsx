import React, {useState} from 'react';
import PlayerHand from './PlayerHand'
import type {Card, Deck, Hand} from './types'


const App = () => {
  const [handState, setHandState] = useState<Hand[] | undefined>()

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

  //good ol' fisher yates
  const shuffleDeck = (array: Deck): Deck => {
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
    const hand1: Hand = {cards: [], pairs: 0, winner: false}
    const hand2: Hand = {cards: [], pairs: 0, winner: false}
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
        if(!hand2.cards[j].pair){
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

    if(hand1.pairs > hand2.pairs){
      hand1.winner = true
    }

    if (hand1.pairs < hand2.pairs){
      hand2.winner = true
    }
    return [hand1, hand2]
  }

  const playGame = () => {
    const deck = createDeck()
    const hands = makeHands(deck)
    setHandState(hands)
  }


  let hand1: Hand | undefined, hand2: Hand | undefined = undefined

  if(handState){
    hand1 = handState[0]
    console.log('hand1', hand1)
    hand2 = handState[1]
    console.log('hand2', hand2)
  }

  return (
    <div className="App">
      <header className="App-header">
        <PlayerHand
          player={1}
          hand={hand1}
        />
        <PlayerHand
          player={2}
          hand={hand2}
        />
        <section className="buttons">
          <button onClick={playGame}>Play Again</button>
        </section>
      </header>
    </div>
  );
}

export default App;
