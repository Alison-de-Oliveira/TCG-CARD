/**
 * Nome do arquivo: CardItem.jsx
 * Data de criação: 13/05/2025
 * Autor: Alison de Oliveira Alves da Silva 
 * Matrícula: 01735081
 *
 * Descrição:
 * 
 */


import '../style.css'

export default function CardItem({ card, onRemove }) {
  if (!card || !card.id) return null;

  const imageUrl = card?.images?.small || "";
  const cardName = card?.name || "Carta Pokémon";

  return (
    <div className="card-item">
      <div className="card-image-container">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={cardName} 
            className="card-image"
          />
        ) : (
          <small style={{ color: "#666" }}>Imagem indisponível</small>
        )}
      </div>
      
      <div className="card-footer">
        <h6 className="card-title">{cardName}</h6>
        <button
          onClick={() => onRemove(card.id)}
          className="remove-button"
        >
          Remover
        </button>
      </div>
    </div>
  );
}