// frontend/src/pages/Search.js
import { renderHeader, renderBottomNav } from '../components/Header.js';
import { renderSearchBar } from '../components/SearchBar.js';
import { renderCategoryCard } from '../components/CategoryCard.js';
import { renderMapContainer } from '../components/MapContainer.js';
import { renderIcon } from '../components/Icon.js';

export function renderSearchPage(residuosFiltrados, termoBusca, pontoAtivo) {
  return `
    <section class="page page-search">
      ${renderHeader('Mapa')}
      <main class="page-content compact-page">
        ${renderSearchBar(termoBusca)}

        <section id="mapa-busca" class="mapa-simples" aria-live="polite">
          ${renderMapContainer(residuosFiltrados, pontoAtivo)}
        </section>
      </main>
      ${renderBottomNav('search')}
    </section>
  `;
}

export function renderSearchResults(residuos) {
  if (!residuos.length) {
    return `
      <div class="empty-state empty-search">
        <span class="icone-pontos">${renderIcon('search')}</span>
        <h2>Nenhum material encontrado</h2>
        <p>Tente buscar por nome ou escolha uma sugestão acima.</p>
      </div>
    `;
  }

  return '';
}