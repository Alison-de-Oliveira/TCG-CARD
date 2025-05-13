/**
 * Nome do arquivo: CardPreviewList.jsx
 * Data de criação: 13/05/2025
 * Autor: Alison de Oliveira Alves da Silva 
 * Matrícula: 01735081
 *
 * Descrição:
 * 
 */

export default function CardPreviewList({ cards, onSelect }) {
  if (!cards.length) return null;

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {cards.slice(0, 18).map((card) => (
        <div
          key={card.id}
          className="card"
          style={{ width: "125px", cursor: "pointer" }}
          onClick={() => onSelect(card)}
        >
          <img src={card.images.small} alt={card.name} className="card-img-top" />
          <div className="card-body p-1">
            <p className="card-text text-center small">{card.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}