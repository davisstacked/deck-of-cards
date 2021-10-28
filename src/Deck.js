import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle";

export const Deck = () => {

  const [deck, setDeck] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      let cards = await axios.get(API_URL);
      setDeck(cards.data)
    }
    fetchData();
  }, [])

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(`https://swapi.dev/api/films/${number}/`);
  //     setMovie(response.data)
  //   }
  //   fetchData()
  // }, [number])
  
  return (
    <div>
      <h1>Card Dealer</h1>
    </div>
  )
}
