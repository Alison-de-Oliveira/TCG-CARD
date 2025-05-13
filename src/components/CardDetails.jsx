/**
 * Nome do arquivo: CardDetails.jsx
 * Data de criação: 13/05/2025
 * Autor: Alison de Oliveira Alves da Silva 
 * Matrícula: 01735081
 *
 * Descrição:
 * 
 */

export default function CardDetails({ card, onSave }) {
  if (!card) return <div className="text-center py-4">Nenhuma carta selecionada</div>;

  return (
    <div className="container mt-3">
      <div className="row">
        {/* Coluna da imagem */}
        <div className="col-md-6 col-lg-5">
          <img src={card.images.large} alt={card.name} className="img-fluid rounded" />
        </div>

        {/* Coluna das informações */}
        <div className="col-md-6 col-lg-7">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              {/* Nome e tipo */}
              <div className="mb-3">
                <h3 className="fw-bold">{card.name}</h3>
                <p className="text-muted mb-1">
                  {card.supertype}{card.subtypes && ` - ${card.subtypes.join(', ')}`}
                </p>
              </div>

              {/* HP e tipo */}
              <div className="mb-3 p-3 bg-light border rounded">
                <p className="mb-0">
                  <strong>HP:</strong> {card.hp || 'N/A'} &nbsp; | &nbsp;
                  <strong>Tipo(s):</strong> {card.types?.join(', ') || 'N/A'}
                </p>
              </div>

              {/* Ataques */}
              {card.attacks && (
                <div className="mb-3">
                  <h5 className="fw-bold border-bottom pb-2 mb-3">Ataques:</h5>
                  <ul className="list-unstyled">
                    {card.attacks.map((atk, i) => (
                      <li key={i} className="mb-2">
                        <strong>{atk.name}</strong> - Custo: {atk.cost?.join(', ') || 'N/A'}
                        <br />
                        Dano: {atk.damage || 'N/A'}<br />
                        {atk.text && <small className="text-muted">{atk.text}</small>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Fraquezas, resistências, etc. */}
              <div className="row mb-3">
                {card.weaknesses && (
                  <div className="col-auto">
                    <h6 className="fw-bold">Fraquezas</h6>
                    <ul className="list-unstyled mb-0">
                      {card.weaknesses.map((w, i) => (
                        <li key={i}>{w.type}: {w.value}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {card.resistances && (
                  <div className="col-auto">
                    <h6 className="fw-bold">Resistências</h6>
                    <ul className="list-unstyled mb-0">
                      {card.resistances.map((r, i) => (
                        <li key={i}>{r.type}: {r.value}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {card.retreatCost && (
                  <div className="col-auto">
                    <h6 className="fw-bold">Custo de Recuo</h6>
                    <p className="mb-0">{card.retreatCost.join(', ')}</p>
                  </div>
                )}
              </div>

              {/* Conjunto e artista */}
              <div className="mt-auto">
                <div className="row">
                  <div className="col">
                    <p className="mb-0">
                      <strong>Conjunto:</strong> {card.set?.name}<br />
                      <strong>Lançamento:</strong> {card.set?.releaseDate || 'N/A'}
                    </p>
                  </div>
                  <div className="col">
                    <p className="mb-0">
                      <strong>Número:</strong> {card.number}<br />
                      <strong>Raridade:</strong> {card.rarity}
                    </p>
                  </div>
                </div>
                <p className="mt-2"><strong>Artista:</strong> {card.artist}</p>
                {card.tcgplayer?.prices?.holofoil?.market && (
                  <p><strong>Preço médio:</strong> ${card.tcgplayer.prices.holofoil.market.toFixed(2)}</p>
                )}
              </div>

              {/* Botão */}
              <div className="d-flex justify-content-start mt-3">
                <button className="btn btn-primary px-4" onClick={() => onSave(card)}>
                  Salvar Carta
                </button>
              </div>
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  );
}