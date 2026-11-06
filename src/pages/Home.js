import { renderHeader, renderBottomNav } from '../components/Header.js';
import { renderIcon } from '../components/Icon.js';
import { renderCategoryCard } from '../components/CategoryCard.js';

export function renderSplashScreen() {
  return `
    <section class="splash-screen">
      <div class="splash-brand">
        <span class="splash-mark">D<i></i></span>
        <p class="splash-name">DIVERDE</p>
        <p class="splash-tagline">Seu guia para reciclar melhor.</p>
      </div>
      <button class="splash-start" onclick="window.navegar('home')" aria-label="Começar">
        ${renderIcon('chevron')}
      </button>
    </section>
  `;
}

export function renderHomePage(residuos) {
  return `
    <section class="page page-home">
      ${renderHeader('Olá!')}

      <main class="page-content">
        <div class="card-topo">
          <div class="pontos-header">
            <span class="icone-pontos">${renderIcon('leaf')}</span>
            <div>
              <span class="pontos-titulo">Reciclar começa com uma escolha</span>
              <p class="pontos-subtitulo">Encontre o destino certo para cada resíduo.</p>
            </div>
          </div>
        </div>

        <div class="section-heading">
          <div>
            <p class="eyebrow eyebrow-dark">GUIA DE RECICLAGEM</p>
            <h2>Escolha uma categoria</h2>
          </div>
          <button class="text-action" onclick="window.navegar('search')">
            Buscar ${renderIcon('chevron')}
          </button>
        </div>

        ${residuos.length
          ? `<div class="grid-categorias">${residuos.map(item => renderCategoryCard(item)).join('')}</div>`
          : `<div class="empty-state"><span class="icone-pontos">${renderIcon('recycle')}</span><h2>Nenhuma categoria disponível</h2><p>Tente novamente quando os dados estiverem disponíveis.</p></div>`
        }

        <a class="map-callout" href="#" onclick="event.preventDefault(); window.navegar('search')">
          <span class="map-callout-icon">${renderIcon('map')}</span>
          <span><strong>Encontre um ponto de coleta</strong><small>Veja os locais associados a cada resíduo</small></span>
          ${renderIcon('chevron')}
        </a>
      </main>
      ${renderBottomNav('home')}
    </section>
  `;
}

export function renderPerfilPage() {
  return `
    <section class="page">
      ${renderHeader('Perfil')}
      <main class="page-content profile-page">
        <div class="perfil-card score-card">
          <span class="label-mini">Pontuação</span>
          <h3>132 pontos</h3>
          <p>Você descartar corretamente em pontos de coleta.</p>
          <div class="score-bar">
            <span></span>
          </div>
          <small>+18 pontos este mês</small>
        </div>

        <div class="perfil-card benefits-card">
          <span class="label-mini">Benefícios</span>
          <h3>Troca por descontos</h3>
          <ul>
            <li>10% em materiais recicláveis</li>
            <li>Descontos em eventos e feiras</li>
            <li>Vouchers em parceiros locais</li>
          </ul>
        </div>
      </main>
      ${renderBottomNav('perfil')}
    </section>
  `;
}