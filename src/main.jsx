/**
 * Nome do arquivo: main.jsx
 * Data de criação: 12/05/2025
 * Autor: Alison de Oliveira Alves da Silva
 * Matrícula: 01735081
 *
 * Descrição:
 * Arquivo de entrada da aplicação React. Responsável por inicializar e renderizar o componente principal App.
 * 
 * Funcionalidades
 * Configura o modo estrito do React (StrictMode) para identificar potenciais problemas.
 * Utiliza createRoot para renderizar a aplicação no elemento com id root.
 * Importa e aplica os estilos do Bootstrap e do CSS customizado da aplicação.
 * Renderiza o componente raiz App.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
