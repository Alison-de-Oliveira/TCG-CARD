<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>TCG-CARD</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f6f8fa;
      color: #24292e;
      margin: 0 auto;
      max-width: 960px;
      padding: 2rem;
    }
    h1, h2, h3 {
      color: #1b1f23;
    }
    .badge {
      display: inline-block;
      background-color: #eaecef;
      border-radius: 5px;
      padding: 4px 8px;
      font-size: 0.85em;
      font-weight: bold;
      margin-right: 8px;
    }
    .highlight {
      background-color: #fff;
      border-left: 4px solid #0077cc;
      padding: 1rem;
      margin-bottom: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    .footer {
      margin-top: 3rem;
      font-size: 0.9em;
      text-align: center;
      color: #888;
    }
    a {
      color: #0077cc;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <h1>🃏 TCG-CARD</h1>
  <p><strong>Projeto desenvolvido com React, Vite e para buscar e salvar cartas de Pokémon usando a API oficial:</strong> <a href="https://pokemontcg.io ">Pokémon Trading Card Game API</a></p>

  <div class="highlight">
    <h2>🚀 Sobre</h2>
    <p>O <strong>TCG-CARD</strong> é uma aplicação web que permite aos usuários <strong>buscar cartas de Pokémon</strong> através da <strong>Pokémon Trading Card Game API</strong>, exibindo informações detalhadas como nome, tipo, ataques, habilidades, imagem e muito mais.</p>
    <p>Além disso, os usuários podem <strong>salvar suas cartas favoritas</strong></p>
  </div>

  ![alt text](image.png)

  <h2>🔍 Funcionalidades</h2>
  <ul>
    <li>✅ Busca por nome, os pokemons suportados pela API</li>
    <li>📄 Exibe dados completos das cartas (nome, imagem, habilidades, ataques, tipos, etc.)</li>
    <li>💾 Salva cartas selecionadas</li>
    <li>🗑️ Remove cartas salvas quando necessário</li>
    <li>🌐 Integração direta com a <a href="https://pokemontcg.io ">Pokémon TCG API</a></li>
  </ul>


  <h2>🛠 Tecnologias utilizadas</h2>
  <ul>
    <li><span class="badge">React</span> – Interface interativa e componentes reutilizáveis</li>
    <li><span class="badge">Vite</span> – Ambiente de desenvolvimento rápido e eficiente</li>
  </ul>

  <h2>📦 Como rodar o projeto</h2>
  <pre><code>git clone https://github.com/Alison-de-Oliveira/TCG-CARD.git <br>cd tcg-card<br>npm install<br>npm run dev</code></pre>


  <div class="footer">
    <p>Alison de Oliveira</p>
  </div>

</body>
</html>