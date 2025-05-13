/**
 * Nome do arquivo: App.jsx
 * Data de criação: 12/05/2025
 * Autor: Alison de Oliveira Alves da Silva 
 * Matrícula: 01735081
 *
 * Descrição:
 * Componente principal que contém toda a lógica do dashboard.
 */


import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CardDetails from "./components/CardDetails";
import SavedCards from "./components/SavedCards";
import CardPreviewList from "./components/CardPreviewList";

const apiKey = import.meta.env.VITE_POKEMON_API_KEY;

export default function App() {
  const [foundCards, setFoundCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("savedCards");
    if (stored) setSavedCards(JSON.parse(stored));
  }, []);

 const handleSearch = async (name) => {
  if (!name.trim()) {
    setFoundCards([]);
    return;
  }

  try {
    const encodedQuery = encodeURIComponent(`name:"${name}"`);
    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=${encodedQuery}`, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });

    const data = await response.json();
    setFoundCards(data.data || []);
    setSelectedCard(null);
  } catch (error) {
    console.error("Erro na busca:", error);
    setFoundCards([]);
  }
};

  const handleSelectCard = (card) => setSelectedCard(card);

  const handleSave = (cardToSave) => {
    if (savedCards.some((c) => c.id === cardToSave.id)) return;
    const updated = [...savedCards, cardToSave];
    setSavedCards(updated);
    localStorage.setItem("savedCards", JSON.stringify(updated));
  };

  const handleRemove = (id) => {
    const updated = savedCards.filter((c) => c.id !== id);
    setSavedCards(updated);
    localStorage.setItem("savedCards", JSON.stringify(updated));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">DASHBOARD POKÉMON</h2>
      <SearchBar onSearch={handleSearch} />
      <CardPreviewList cards={foundCards} onSelect={handleSelectCard} />
      {selectedCard && (
        <div className="row mt-4">
          <div className="col-md-6">
            <CardDetails card={selectedCard} onSave={handleSave} />
          </div>
          <div className="col-md-6">
            <h5>Suas Cartas</h5>
            <SavedCards cards={savedCards} onRemove={handleRemove} />
          </div>
        </div>
      )}
    </div>
  );
}