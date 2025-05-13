/**
 * Nome do arquivo: SearchBar.jsx
 * Data de criação: 13/05/2025
 * Autor: Alison de Oliveira Alves da Silva 
 * Matrícula: 01735081
 *
 * Descrição:
 * 
 */


import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Digite o nome da carta (ex: Pikachu)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch(input);
        }}
      />
      <button className="btn btn-primary mt-2" onClick={() => onSearch(input)}>
        Buscar
      </button>
    </div>
  );
}