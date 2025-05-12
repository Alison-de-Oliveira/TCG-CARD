/**
 * Nome do arquivo: App.jsx
 * Data de criação: 12/05/2025
 * Autor: Alison de Oliveira Alves da Silva 
 * Matrícula: 01735081
 *
 * Descrição:
 * Componente principal que contém toda a lógica do dashboard.
 */


import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [savedCards, setSavedCards] = useState([]);
  const [searchedCard, setSearchedCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [cardId, setCardId] = useState('');
  
  const apiKey = import.meta.env.VITE_POKEMON_API_KEY;

  useEffect(() => {
    const loadedCards = JSON.parse(localStorage.getItem('pokemonCards')) || [];
    setSavedCards(loadedCards);
  }, []);

  const searchCard = async () => {
    if (!cardId.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get(`https://api.pokemontcg.io/v2/cards/${cardId}`, {
        headers: { 'X-Api-Key': apiKey }
      });
      setSearchedCard(response.data.data);
    } catch (err) {
      setError('Carta não encontrada. Verifique o ID e tente novamente.');
      setSearchedCard(null);
    } finally {
      setLoading(false);
    }
  };

  const saveCard = () => {
    if (!searchedCard) return;
    
    const isAlreadySaved = savedCards.some(card => card.id === searchedCard.id);
    if (isAlreadySaved) {
      setError('Esta carta já está salva.');
      return;
    }
    
    const updatedCards = [...savedCards, searchedCard];
    localStorage.setItem('pokemonCards', JSON.stringify(updatedCards));
    setSavedCards(updatedCards);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Dashboard de Cartas Pokémon</h1>

      <section className="mb-5">
        <h2>Suas Cartas Salvas</h2>
        {savedCards.length > 0 ? (
          <div className="d-flex flex-wrap gap-2">
            {savedCards.map(card => (
              <img 
                key={card.id} 
                src={card.images.small} 
                alt={card.name} 
                className="img-thumbnail"
                style={{ width: '150px', cursor: 'pointer' }}
                onClick={() => setSearchedCard(card)}
              />
            ))}
          </div>
        ) : (
          <p>Nenhuma carta salva.</p>
        )}
      </section>
    </div>






  );
}

export default App;