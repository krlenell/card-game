import React from "react";
import type {Hand} from './types'

interface PlayerHandProps{
  player: number,
  hand: Hand | undefined
}

const PlayerHand = (props: PlayerHandProps): React.ReactElement => {
  let winning = ""
  let cards
  if(props.hand){
    winning = props.hand.winner ? "winning" : ""

    cards = props.hand.cards.map((card) =>
      <img
        src={`http://h3h.net/images/cards/${card.suit}_${card.value}.svg`}
        className={`card ${card.pair}`}
        alt={`${card.suit}_${card.value}`}
        key={`${card.suit}_${card.value}`}
      />
    )
  }
  return(
    <section className={`hand ${winning}`}>
      <h1>{`Player ${props.player}`}</h1>
        {cards}
    </section>
  )

}

export default PlayerHand
