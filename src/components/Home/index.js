import React from "react";
import cards from "../../json/cards.json"

let cardEl = cards.map(function(card){
    return <li>{card.name}</li>
})


export default function Home(){
   return (
    <ul>
        {cardEl}
    </ul>
   )
}