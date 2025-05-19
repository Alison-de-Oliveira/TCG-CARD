/**
 * Nome do arquivo: CardPreviewList.jsx
 * Data de criação: 13/05/2025
 * Autor: Alison de Oliveira Alves da Silva 
 * Matrícula: 01735081
 *
 * Descrição:
 * 
 */

import { useRef } from "react";

export default function CardPreviewList({ cards, onSelect }) {
  if (!cards.length) return null;

  const handleKeyDown = (event, card) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(card);
    }
  };

  const handleMouseMove = (e, ref) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (ref) => {
    const card = ref.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {cards.slice(0, 18).map((card) => {
        const cardRef = useRef(null);

        return (
          <div
            key={card.id}
            className="card card-3d"
            style={{ width: "125px", cursor: "pointer" }}
            role="button"
            tabIndex={0}
            onClick={() => onSelect(card)}
            onKeyDown={(e) => handleKeyDown(e, card)}
            aria-label={`Visualizar detalhes da carta ${card.name}`}
          >
            <div
              ref={cardRef}
              className="card-inner card-glow"
              onMouseMove={(e) => handleMouseMove(e, cardRef)}
              onMouseLeave={() => handleMouseLeave(cardRef)}
            >
              <img
                src={card.images.small}
                alt={`Imagem da carta ${card.name}`}
                className="card-img-top"
              />
              <div className="card-body p-1">
                <p className="card-text text-center small">{card.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
