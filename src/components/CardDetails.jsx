export default function CardDetails({ card, onSave }) {
  if (!card) return <div className="text-center">Nenhuma carta selecionada</div>;

  return (
    <div className="text-center">
      <img src={card.images.large} alt={card.name} className="img-fluid mb-2" />
      <h5>{card.name}</h5>
      <p>HP: {card.hp} | Tipo: {card.types?.join(', ')}</p>
      <button className="btn btn-primary" onClick={() => onSave(card)}>
        Salvar Carta
      </button>
    </div>
  );
}