/**
 * Nome do arquivo: SearchBar.jsx
 * Data de criação: 13/05/2025
 * Autor: Alison de Oliveira Alves da Silva 
 * Matrícula: 01735081
 *
 * Descrição:
 * 
 */

import { useState, useEffect } from "react";
export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Digite o nome da carta (ex: umbreon ex)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}