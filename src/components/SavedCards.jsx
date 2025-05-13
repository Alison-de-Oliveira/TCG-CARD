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

export default function SavedCards({ cards, onRemove }) {
  if (cards.length === 0) return <p>Nenhuma carta salva.</p>;

  return (
    <div className="d-flex flex-wrap justify-content-center gap-2">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} onRemove={onRemove} />
      ))}
    </div>
  );
}