export default function CardItem({ card, onRemove }) {
  return (
    <div className="card" style={{ width: '5rem' }}>
      <img src={card.images.small} alt={card.name} className="card-img-top" />
      <div className="card-body p-1 text-center">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onRemove(card.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
}