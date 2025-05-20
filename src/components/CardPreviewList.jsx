/**
 * Nome do arquivo: CardPreviewList.jsx
 * Data de criação: 13/05/2025
 * Autor: Alison de Oliveira Alves da Silva 
 * Matrícula: 01735081
 * 
 * Descrição:
 * Componente que exibe uma lista de pré-visualizações de cartas Pokémon com interação 3D e seleção por clique ou teclado.
 * 
 * Funcionalidades
 * Renderiza até 18 cartas em layout responsivo.
 * Aplica efeito 3D nas cartas ao mover o mouse.
 * Permite selecionar uma carta clicando ou pressionando Enter/Space.
 */

import { useRef, useEffect } from "react";

export default function CardPreviewList({ cards, onSelect }) {
  const cardRefs = useRef([]);

  // Garante que o array de refs tenha o tamanho correto
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, cards.length);
  }, [cards]);

  if (!cards.length) return null;

  const handleKeyDown = (event, card) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(card);
    }
  };

  const handleMouseMove = (e, ref) => {
    const card = ref;
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
    const card = ref;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {cards.slice(0, 18).map((card, index) => (
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
            ref={(el) => (cardRefs.current[index] = el)}
            className="card-inner card-glow"
            onMouseMove={(e) => handleMouseMove(e, cardRefs.current[index])}
            onMouseLeave={() => handleMouseLeave(cardRefs.current[index])}
          >
            <img
              src={card.images.small}
              alt={`Imagem da carta ${card.name}`}
              className="card-img-top"
              onError={(e) => {
                e.currentTarget.src = "/fallback.jpg"; // Caminho da imagem de fallback
              }}
            />
            <div className="card-body p-1">
              <p className="card-text text-center small">{card.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
