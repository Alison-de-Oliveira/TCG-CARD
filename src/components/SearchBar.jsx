/**
 * Nome do arquivo: SearchBar.jsx
 * Data de criação: 13/05/2025
 * Autor: Alison de Oliveira Alves da Silva 
 * Matrícula: 01735081
 * 
 * Descrição:
 * Componente de barra de busca utilizado para filtrar cartas Pokémon pelo nome.
 * 
 * Funcionalidades
 * Recebe e exibe o valor do input através da prop value
 * Atualiza o valor digitado via função onChange.
 * Possui placeholder orientando o usuário na busca.
 * Acessibilidade: possui label oculta com visually-hidden para leitores de tela.
 * Desativa sugestões automáticas e verificação ortográfica do navegador.
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