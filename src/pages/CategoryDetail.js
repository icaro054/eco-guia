// frontend/src/pages/CategoryDetail.js
import { renderHeader, renderBottomNav } from '../components/Header.js';
import { renderIcon } from '../components/Icon.js';

export function renderCategoryDetailPage(item) {
  return `
    <section class="page">
      ${renderHeader(item.categoria)}
      <main class="page-content detail-content">
        <button class="back-action" onclick="window.navegar('home')">${renderIcon('chevron')} Voltar às categorias</button>
        <article class="detail-hero">
          <span class="detail-symbol">${renderIcon('recycle')}</span>
          <p class="eyebrow eyebrow-dark">GUIA DE DESCARTE</p>
          <h2>${item.nome}</h2>
          <span class="category-pill">${item.categoria}</span>
        </article>

        <section class="detail-section">
          <h3>Sobre este material</h3>
          <p>${item.historia}</p>
        </section>
        <section class="detail-section detail-highlight">
          <span class="detail-section-icon">${renderIcon('check')}</span>
          <div><h3>Como descartar</h3><p>${item.descarte}</p></div>
        </section>
        <section class="detail-section">
          <h3>Você sabia?</h3>
          <p>${item.curiosidade}</p>
        </section>
        <section class="detail-section detail-tip">
          <h3>Dica ambiental</h3>
          <p>${item.dica}</p>
        </section>

        ${item.pontoColeta ? `
          <section class="detail-section point-detail">
            <p class="eyebrow eyebrow-dark">ONDE DESCARTAR</p>
            <h3>${renderIcon('pin')} ${item.pontoColeta.nome}</h3>
            <p>${item.pontoColeta.endereco}</p>
            ${item.pontoColeta.simulado ? `<p class="aviso-simulado">${renderIcon('map')} ${item.pontoColeta.aviso}</p>` : ''}
          </section>
        ` : ''}
      </main>
      ${renderBottomNav('home')}
    </section>
  `;
}