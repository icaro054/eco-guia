// frontend/src/main.js
import { api } from './services/api.js';
import { renderSplashScreen, renderHomePage, renderPerfilPage } from './pages/Home.js';
import { renderSearchPage, renderSearchResults } from './pages/Search.js';
import { renderCategoryDetailPage } from './pages/CategoryDetail.js';
import { renderMapContainer } from './components/MapContainer.js';

const app = document.getElementById('app');
let listaCompleta = [];
let pontoMapaAtivo = null;
let resultadosBusca = [];
let sequenciaBusca = 0;
let temporizadorBusca;

async function iniciarApp() {
  app.innerHTML = renderSplashScreen();
  listaCompleta = await api.listarResiduos();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .catch(error => console.error('Não foi possível registrar o service worker:', error));
  }
}

window.navegar = async (tela) => {
  if (tela === 'home') {
    pontoMapaAtivo = null;
    app.innerHTML = renderHomePage(listaCompleta);
  } else if (tela === 'search') {
    resultadosBusca = listaCompleta;
    app.innerHTML = renderSearchPage(resultadosBusca, '', pontoMapaAtivo);
  } else if (tela === 'perfil') {
    app.innerHTML = renderPerfilPage();
  }
};

window.abrirCategoria = async (nomeCategoria) => {
  const item = await api.obterPorCategoria(nomeCategoria);
  if (item) {
    app.innerHTML = renderCategoryDetailPage(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

window.executarBusca = (termo) => {
  const buscaId = ++sequenciaBusca;
  window.clearTimeout(temporizadorBusca);
  temporizadorBusca = window.setTimeout(async () => {
    const filtrados = await api.listarResiduos(termo);
    if (buscaId !== sequenciaBusca) return;

    resultadosBusca = filtrados;
    const input = document.getElementById('input-pesquisa');
    if (input && input.value !== termo) input.value = termo;
    pontoMapaAtivo = filtrados.some(item => item.pontoColeta?.nome === pontoMapaAtivo?.nome)
      ? pontoMapaAtivo
      : filtrados[0]?.pontoColeta || null;

    const resultados = document.getElementById('resultados-busca');
    const mapa = document.getElementById('mapa-busca');
    if (resultados && mapa) {
      resultados.innerHTML = renderSearchResults(filtrados);
      mapa.innerHTML = renderMapContainer(filtrados, pontoMapaAtivo);
    }
  }, 180);
};

window.selecionarPonto = async (nomeCategoria) => {
  const item = await api.obterPorCategoria(nomeCategoria);
  if (item) {
    pontoMapaAtivo = item.pontoColeta;
    const mapa = document.getElementById('mapa-busca');
    if (mapa) mapa.innerHTML = renderMapContainer(resultadosBusca, pontoMapaAtivo);
  }
};

iniciarApp();