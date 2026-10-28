import { renderIcon } from './Icon.js';

export function renderMapContainer(residuos, pontoSelecionado) {
  const pontos = residuos.reduce((locais, residuo) => {
    if (!residuo.pontoColeta) return locais;

    const existente = locais.find(ponto =>
      ponto.nome === residuo.pontoColeta.nome && ponto.endereco === residuo.pontoColeta.endereco
    );
    if (existente) {
      if (!existente.categorias.includes(residuo.categoria)) {
        existente.categorias.push(residuo.categoria);
      }
      return locais;
    }

    locais.push({
      ...residuo.pontoColeta,
      categoria: residuo.categoria,
      categorias: [residuo.categoria]
    });
    return locais;
  }, []);
  const atual = pontoSelecionado || pontos[0];

  if (!pontos.length) {
    return `
      <div class="map-empty">
        <div><strong>Pontos de coleta</strong><p>Os locais aparecerão aqui quando houver resultados.</p></div>
      </div>
    `;
  }

  return `
    <div class="map-section">
      <div class="mini-header">
        <span>Mapa</span>
        <strong>${pontos.length} pontos</strong>
      </div>

      <div class="mapa-visual" role="img" aria-label="Mapa com pontos de coleta">
        <div class="mapa-rua"></div>
        <div class="mapa-rua small"></div>
        <div class="mapa-rua vertical"></div>
        <div class="mapa-ponto p1"></div>
        <div class="mapa-ponto p2"></div>
        <div class="mapa-ponto p3"></div>
      </div>

      <div class="point-list">
        ${pontos.map(ponto => `
          <button class="point-item ${ponto.nome === atual.nome ? 'selecionado' : ''}" onclick="window.selecionarPonto('${ponto.categoria}')">
            <span class="point-bola"></span>
            <span class="point-copy">
              <strong>${ponto.nome}</strong>
              <small>${ponto.endereco}</small>
            </span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}