import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

export const Deck = () => {

  const [deck, setDeck] = useState(null);
  const [drawn, setDrawn] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      let cards = await axios.get(`${API_BASE_URL}/new/shuffle`);
      setDeck(cards.data)
    }
    fetchData();
  }, [])

  const getCard = async () => {
    let id = deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}/${id}/draw/`;
      // make request using deck id
      let cardRes = await axios.get(cardUrl);
      if (!cardRes.data.success) {
        throw new Error("No card remaining!")
      }
      // set state using new card info from api
      let card = cardRes.data.cards[0]
      setDrawn([...drawn,
        {
          id: card.code,
          image: card.image,
          name: `${card.value} of ${card.suit}`
      }
      ])
    }
    catch (err) {
      alert(err);
    }
  }
  
  return (
    <div>
      <h1>Card Dealer</h1>
      <button onClick={getCard}>Get Card!</button>
    </div>
  )
}
