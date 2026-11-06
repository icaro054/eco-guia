import { renderIcon } from './Icon.js';

export function renderHeader(titulo = 'Olá, Ana!') {
  return `
    <header class="header-verde">
      <div class="header-copy">
        <p class="eyebrow">DIVERDE · GUIA DE DESCARTE</p>
        <h1>${titulo}</h1>
      </div>
      <a class="logo-circulo" href="#" aria-label="Diverde, início" onclick="event.preventDefault(); window.navegar('home')">
        <span>D</span><i></i>
      </a>
    </header>
  `;
}

export function renderBottomNav(telaAtiva = '') {
  return `
    <nav class="bottom-nav" aria-label="Navegação principal">
      <button class="${telaAtiva === 'home' ? 'ativo' : ''}" onclick="window.navegar('home')" aria-label="Início" aria-current="${telaAtiva === 'home' ? 'page' : 'false'}">
        ${renderIcon('home')}
      </button>
      <button class="${telaAtiva === 'search' ? 'ativo' : ''}" onclick="window.navegar('search')" aria-label="Buscar e mapa" aria-current="${telaAtiva === 'search' ? 'page' : 'false'}">
        ${renderIcon('compass')}
      </button>
      <button class="${telaAtiva === 'perfil' ? 'ativo' : ''}" onclick="window.navegar('perfil')" aria-label="Perfil" aria-current="${telaAtiva === 'perfil' ? 'page' : 'false'}">
        ${renderIcon('user')}
      </button>
    </nav>
  `;
}