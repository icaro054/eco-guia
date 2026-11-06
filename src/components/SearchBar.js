import { renderIcon } from './Icon.js';

export function renderSearchBar(valorAtual = '') {
  const sugestoes = ['Pilha', 'Papel', 'Garrafa PET', 'Lata', 'Vidro'];
  return `
    <div class="search-container" role="search">
      <label class="barra-busca">
        ${renderIcon('search')}
        <input
          type="text"
          id="input-pesquisa"
          aria-label="Pesquisar resíduo"
          value="${valorAtual}"
          placeholder="O que você precisa descartar?"
          oninput="window.executarBusca(this.value)"
        />
        <button type="button" class="limpar-busca" onclick="window.executarBusca('')" aria-label="Limpar busca">
          ${renderIcon('x')}
        </button>
      </label>
      <p class="sugestoes-label">Buscas populares</p>
      <div class="sugestoes-lista">
        ${sugestoes.map(s => `
          <button class="chip-sugestao" type="button" onclick="window.executarBusca('${s}')">${s}</button>
        `).join('')}
      </div>
    </div>
  `;
}