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
import PokemonTCG from "pokemontcgsdk";

PokemonTCG.configure({ apiKey: import.meta.env.VITE_POKEMON_API_KEY });

export default function App() {
  const [foundCards, setFoundCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [savedCards, setSavedCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
  const fetchCards = async () => {
    if (!searchTerm.trim() || searchTerm.trim().length < 3) {
      setFoundCards([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const cleanedSearchTerm = searchTerm.trim().replace(/\s+/g, ' ');

      const terms = cleanedSearchTerm.split(" ");
      const query = terms.map(t => `name:*${t}*`).join(" AND ");

      const cards = await PokemonTCG.card.all({ 
        q: query
      });

      console.log("Cartas filtradas por nome:", cards);
      setFoundCards(cards.slice(0, 16));
    } catch (error) {
      console.error("Erro na busca:", error);
      setFoundCards([]);
    } finally {
      setIsLoading(false);
    }
  };

  const delay = setTimeout(fetchCards, 300);
  return () => clearTimeout(delay);
}, [searchTerm]);

  const handleSelectCard = (card) => {
    setSelectedCard(card);
  };

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
      <h2 className="dashboard-title mb-4">DASHBOARD POKÉMON</h2>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {isLoading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
          <p>Buscando cartas...</p>
        </div>
      )}

      {!isLoading && searchTerm.length > 0 && searchTerm.length < 3 && (
        <div className="alert alert-info mt-3">
          Digite pelo menos 3 caracteres para buscar
        </div>
      )}

      {!isLoading && searchTerm.length >= 3 && foundCards.length === 0 && (
        <div className="alert alert-warning mt-3">
          Nenhum Pokémon encontrado para "{searchTerm}"
        </div>
      )}

      {!isLoading && searchTerm.length >= 3 && foundCards.length > 0 && (
        <CardPreviewList cards={foundCards} onSelect={handleSelectCard} />
      )}

      {selectedCard && (
        <div className="row mt-2">
          <div className="col-md-12">
            <CardDetails card={selectedCard} onSave={handleSave} />
          </div>
        </div>
      )}
      
      <div>
        <div className="col-md-12 text-center">
          <h5>Suas Cartas</h5>
        </div>
        <div className="col-md-12">
          <SavedCards cards={savedCards} onRemove={handleRemove} />
        </div>
      </div>
    </div>
  );
}
