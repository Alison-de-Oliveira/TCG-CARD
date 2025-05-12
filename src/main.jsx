/**
 * Nome do arquivo: main.jsx
 * Data de criação: 12/05/2025
 * Autor: Alison de Oliveira Alves da Silva
 * Matrícula: 01735081
 *
 * Descrição:
 *
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
