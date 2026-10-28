import { renderIcon } from './Icon.js';

function iconForCategory(categoria = '') {
  const name = categoria.toLowerCase();
  if (name.includes('pilha') || name.includes('bateria')) return 'battery';
  if (name.includes('papel')) return 'recycle';
  if (name.includes('plástico') || name.includes('plastico') || name.includes('vidro')) return 'bottle';
  if (name.includes('orgânico') || name.includes('organico')) return 'leaf';
  if (name.includes('metal') || name.includes('lata')) return 'can';
  return 'recycle';
}

export function renderCategoryCard(item) {
  return `
    <button class="card-categoria" onclick="window.abrirCategoria('${item.categoria}')" aria-label="Ver orientações para ${item.categoria}">
      <span class="icone-categoria">${renderIcon(iconForCategory(item.categoria))}</span>
      <span class="categoria-nome">${item.categoria}</span>
      <span class="categoria-acao">Ver orientações ${renderIcon('chevron')}</span>
    </button>
  `;
}