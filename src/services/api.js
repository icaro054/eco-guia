// frontend/src/services/api.js
const API_URL = 'http://localhost:3000/api';

// Dados estruturados conforme RF04, RN01, RN02, RN03 e RN04
const DADOS_FALLBACK = [
  {
    id: "res-papel",
    categoria: "Papel",
    nome: "Folhas de Caderno e Caixas de Papelão",
    historia: "Produzido a partir de fibras de celulose, o papel é um dos materiais mais utilizados e recicláveis na rotina académica.",
    descarte: "Descarte seco, sem restos de comida e sem agrafos ou clipes metálicos no contentor azul.",
    curiosidade: "Reciclar 1 tonelada de papel poupa cerca de 20 árvores adultas.",
    dica: "Não amasse o papel em bolas; folhas lisas ocupam menos espaço e preservam as fibras.",
    pontoColeta: {
      nome: "Ecoponto Pátio Central / Cantina",
      endereco: "Bloco Central - Piso Térreo",
      simulado: true,
      aviso: "Ponto de coleta simulado conforme o regulamento."
    }
  },
  {
    id: "res-pilhas",
    categoria: "Pilhas",
    nome: "Pilha Alcalina Usada",
    historia: "Criadas para fornecer energia portátil, contêm metais pesados que contaminam o solo e a água se descartadas no lixo comum.",
    descarte: "Nunca descarte no lixo comum. Entregue no coletor específico de pilhas e baterias da faculdade.",
    curiosidade: "Uma única pilha pode contaminar cerca de 30 mil litros de água.",
    dica: "Opte por pilhas recarregáveis para reduzir o volume de descarte.",
    pontoColeta: {
      nome: "Coletor E-Lixo - Receção Bloco A",
      endereco: "Entrada Principal do Bloco A",
      simulado: true,
      aviso: "Ponto de coleta simulado conforme o regulamento."
    }
  },
  {
    id: "res-plastico",
    categoria: "Plástico",
    nome: "Garrafa PET e Copos Descartáveis",
    historia: "Polímero derivado do petróleo amplamente utilizado em embalagens de bebidas desde a década de 1970.",
    descarte: "Esvazie totalmente o líquido, passe por água rápida e coloque no contentor vermelho.",
    curiosidade: "O plástico pode demorar mais de 400 anos a decompor-se na natureza.",
    dica: "Utilize uma garrafa reutilizável nas aulas para diminuir o consumo de descartáveis.",
    pontoColeta: {
      nome: "Ecoponto Pátio Central / Cantina",
      endereco: "Bloco Central - Piso Térreo",
      simulado: true,
      aviso: "Ponto de coleta simulado conforme o regulamento."
    }
  },
  {
    id: "res-organico",
    categoria: "Material Orgânico",
    nome: "Restos de Frutas e Borra de Café",
    historia: "Resíduos de origem biológica resultantes das refeições diárias na comunidade académica.",
    descarte: "Deposite no contentor castanho ou nos coletores destinados à compostagem.",
    curiosidade: "Mais de 50% dos resíduos urbanos são compostos por matéria orgânica reciclável via compostagem.",
    dica: "Separe sempre os resíduos húmidos para não contaminar o papel e o plástico seco.",
    pontoColeta: {
      nome: "Composteira do Jardim Académico",
      endereco: "Área Verde atrás do Bloco B",
      simulado: true,
      aviso: "Ponto de coleta simulado conforme o regulamento."
    }
  },
  {
    id: "res-metal",
    categoria: "Metal",
    nome: "Latas de Alumínio (Refrigerante e Sumo)",
    historia: "O alumínio é um material 100% e infinitamente reciclável sem perder as suas propriedades originais.",
    descarte: "Esvazie o líquido e deposite no contentor amarelo.",
    curiosidade: "Uma lata de alumínio reciclada volta às prateleiras em apenas 60 dias.",
    dica: "Amasse a lata antes de descartar para otimizar o espaço do coletor.",
    pontoColeta: {
      nome: "Ecoponto Pátio Central / Cantina",
      endereco: "Bloco Central - Piso Térreo",
      simulado: true,
      aviso: "Ponto de coleta simulado conforme o regulamento."
    }
  },
  {
    id: "res-vidro",
    categoria: "Vidro",
    nome: "Frascos e Garrafas de Vidro",
    historia: "Produzido a partir do aquecimento da areia, é impermeável e totalmente reciclável.",
    descarte: "Deposite no contentor verde. Caso esteja partido, embrulhe em papel grosso para evitar acidentes.",
    curiosidade: "O vidro pode levar até 4 mil anos a decompor-se na natureza.",
    dica: "Reutilize frascos de vidro para armazenar alimentos ou materiais de estudo.",
    pontoColeta: {
      nome: "Ecoponto Pátio Central / Cantina",
      endereco: "Bloco Central - Piso Térreo",
      simulado: true,
      aviso: "Ponto de coleta simulado conforme o regulamento."
    }
  }
];

export const api = {
  async listarResiduos(termoBusca = '') {
    try {
      const res = await fetch(`${API_URL}/residuos?nome=${encodeURIComponent(termoBusca)}`);
      if (!res.ok) throw new Error('Usando fallback local');
      return await res.json();
    } catch (error) {
      console.warn('Falha ao consultar a API; usando os dados locais.', error);
      const t = termoBusca.toLowerCase();
      return DADOS_FALLBACK.filter(item =>
        item.nome.toLowerCase().includes(t) || item.categoria.toLowerCase().includes(t)
      );
    }
  },

  async obterPorCategoria(nomeCategoria) {
    const todos = await this.listarResiduos();
    return todos.find(item => item.categoria.toLowerCase() === nomeCategoria.toLowerCase());
  }
};