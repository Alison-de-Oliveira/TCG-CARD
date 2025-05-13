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