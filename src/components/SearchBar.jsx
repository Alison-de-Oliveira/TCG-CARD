/**
 * Nome do arquivo: SearchBar.jsx
 * Data de criação: 13/05/2025
 * Autor: Alison de Oliveira Alves da Silva 
 * Matrícula: 01735081
 *
 * Descrição:
 * 
 */

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar-container mb-3">
      <label htmlFor="searchInput" className="form-label visually-hidden">
        Buscar cartas
      </label>
      <input
        id="searchInput"
        type="text"
        className="form-control"
        placeholder="Digite o nome da carta (ex: umbreon ex)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        spellCheck={false}
      />
    </div>
  );
}