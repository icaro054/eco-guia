import { getCategoryIconName, renderIcon } from './Icon.js';

export function renderCategoryCard(item, showItemName = false) {
  return `
    <button class="card-categoria" onclick="window.abrirCategoria('${item.categoria}')" aria-label="Ver orientações para ${item.categoria}">
      <span class="icone-categoria">${renderIcon(getCategoryIconName(item.categoria))}</span>
      <span class="categoria-nome">${item.categoria}</span>
      ${showItemName ? `<span class="resultado-nome">${item.nome}</span>` : ''}
      <span class="categoria-acao">Ver orientações ${renderIcon('chevron')}</span>
    </button>
  `;
}