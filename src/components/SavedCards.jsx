/**
 * Nome do arquivo: SavedCards.jsx
 * Data de criação: 13/05/2025
 * Autor: Alison de Oliveira Alves da Silva 
 * Matrícula: 01735081
 *
 * Descrição:
 * 
 */
import CardItem from "./CardItem";  

export default function SavedCards({ cards = [], onRemove }) {
  if (!Array.isArray(cards)) return null;

  return (
    <div className="saved-cards-wrapper">
      {cards.length === 0 ? (
        <p className="text-muted text-center">Nenhuma carta salva.</p>
      ) : (
        cards.map((card) => (
          <CardItem key={card.id} card={card} onRemove={onRemove} />
        ))
      )}
    </div>
  );
}