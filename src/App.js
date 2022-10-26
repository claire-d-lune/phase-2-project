import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"

import NavBar from './components/NavBar';
import CardLibrary from './components/CardLibrary';
import FortuneTeller from './components/FortuneTeller';
import SavedFortunes from './components/SavedFortunes';
import NewCardPage from './components/NewCardPage';
import './styling/App.css';

function App() {

  const [deckContents, setDeck] = useState([])
  const [searchTerm, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:4000/cards")
    .then(res => res.json())
    .then(data => setDeck([...data]))

  }, []);

  const cardsInSearch = deckContents.filter(card => {
    return card.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="App">
        <h1 class="text-lg underline">Tera's Magic Library</h1>
        <NavBar/>
        <Routes>
          <Route path="/"  element={<CardLibrary deck={cardsInSearch} searchTerm={searchTerm} setSearch={setSearch}/>}/>
          <Route path="fortune_teller"  element={<FortuneTeller deck={deckContents}/>}/>
          <Route path="my_fortunes"  element={<SavedFortunes/>}/>
          <Route path="custom_card"  element={<NewCardPage/>}/>
        </Routes>
    </div>
  );
}

export default App;