type Card = {
  suit: string
  value: string
  pair: null | 'pair0' | 'pair1'
}

type Deck = Card[]

type Hand = {
  cards: Card[],
  pairs: number
  winner: boolean
}

export type {Card, Deck, Hand}
