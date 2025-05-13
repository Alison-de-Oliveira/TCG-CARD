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
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Carrega cartas salvas do localStorage
  useEffect(() => {
    const stored = localStorage.getItem("savedCards");
    if (stored) setSavedCards(JSON.parse(stored));
  }, []);

  // Faz a busca automática com debounce ao digitar
  useEffect(() => {
  const fetchCards = async () => {
    if (!searchTerm.trim() || searchTerm.trim().length < 3) {
      setFoundCards([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      // Prepara o termo de busca removendo espaços extras e tratando espaços internos
      const cleanedSearchTerm = searchTerm.trim().replace(/\s+/g, ' ');
      
      // Divide o termo em palavras para busca mais precisa
      const searchWords = cleanedSearchTerm.split(' ');
      
      // Constrói a query dinamicamente
      let queryParts = [];
      
      // Para cada palavra, adiciona uma condição de busca
      searchWords.forEach(word => {
        if (word.length > 0) {
          queryParts.push(`name:${word}*`);
        }
      });
      
      // Combina todas as condições com AND
      const finalQuery = queryParts.join(' ');
      
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=${encodeURIComponent(finalQuery)}`,
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );

      const data = await response.json();
      console.log("Resultados da busca:", data.data); // Para debug
      setFoundCards(data.data?.slice(0, 18) || []);
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
      <h2 className="text-center mb-4">DASHBOARD POKÉMON</h2>

      {/* Campo de busca */}
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {/* Mensagem de loading */}
      {isLoading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
          <p>Buscando cartas...</p>
        </div>
      )}

      {/* Mensagem quando tem menos de 3 caracteres */}
      {!isLoading && searchTerm.length > 0 && searchTerm.length < 3 && (
        <div className="alert alert-info mt-3">
          Digite pelo menos 3 caracteres para buscar
        </div>
      )}

      {/* Mensagem quando não encontra resultados */}
      {!isLoading && searchTerm.length >= 3 && foundCards.length === 0 && (
        <div className="alert alert-warning mt-3">
          Nenhum Pokémon encontrado para "{searchTerm}"
        </div>
      )}

      {/* Lista de pré-visualização */}
      {!isLoading && searchTerm.length >= 3 && foundCards.length > 0 && (
        <CardPreviewList cards={foundCards} onSelect={handleSelectCard} />
      )}

      {/* Detalhes da carta e suas cartas salvas */}
      {selectedCard && (
  <div className="row mt-2">
    <div className="col-md-12">
      <CardDetails card={selectedCard} onSave={handleSave} />
    </div>
   
  </div>
)}
  <div>
 <div className="col-md-12 text-center"> {/* Centraliza apenas o título */}
      <h5>Suas Cartas</h5>
    </div>
    <div className="col-md-12">
      <SavedCards cards={savedCards} onRemove={handleRemove} />
    </div>
</div>
</div>
  );
}