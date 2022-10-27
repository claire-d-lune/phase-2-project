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

  //I am using this to store in state all of the saved fortunes. This will be needed in Saved Fortunes and
  //Tell my Fortune to update the component when a new entry is added.
  const [savedFortunes, setSavedFortunes] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/cards")
    .then(res => res.json())
    .then(data => setDeck([...data]))

  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/fortunes")
    .then(res => res.json())
    .then(data => setSavedFortunes([...data]))

  }, []);

  console.log(savedFortunes)

  const cardsInSearch = deckContents.filter(card => {
    return card.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="App">
        <h1>Tera's Magic Library</h1>
        <NavBar/>
        <Routes>
          <Route path="/" element={<CardLibrary deck={cardsInSearch} searchTerm={searchTerm} setSearch={setSearch}/>}/>
          <Route path="fortune_teller" element={<FortuneTeller deck={deckContents} savedFortunes={savedFortunes} setSavedFortunes={setSavedFortunes}/>}/>
          <Route path="my_fortunes"  element={<SavedFortunes savedFortunes={savedFortunes}/>}/>
          <Route path="custom_card"  element={<NewCardPage/>}/>
        </Routes>
    </div>
  );
}

export default App;