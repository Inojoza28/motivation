// ====== Array de mensagens (textos motivadores e equilibrados) ======
const messages = [
    {
      frase: `"Confie em seu potencial, mesmo quando ninguém mais acreditar."`,
      explicacao: "Às vezes, a maior prova de fé é aquela que depositamos em nós mesmos. A autoconfiança pode ser o primeiro passo para despertar o interesse e o respeito de quem está ao seu redor."
    },
    {
      frase: `"Você não precisa enxergar o caminho todo, apenas se mover na direção certa."`,
      explicacao: "Pensar em tudo o que falta pode ser paralisante, mas dar um passo de cada vez ajuda a lidar melhor com as incertezas. O progresso começa na ação."
    },
    {
      frase: `"Até a menor das sementes carrega a força para se tornar uma grande árvore."`,
      explicacao: "Não subestime pequenos começos. Assim como uma semente, suas ideias e ações podem crescer e transformar seu entorno se forem nutridas com persistência."
    },
    {
      frase: `"A cada dificuldade superada, surge uma versão mais forte de você mesmo."`,
      explicacao: "Obstáculos testam nossa resiliência e nos permitem descobrir capacidades que, às vezes, nem sabíamos possuir. Encare-os como oportunidades de amadurecimento."
    },
    {
      frase: `"Ser grato pelo que se tem é o caminho mais curto para a felicidade genuína."`,
      explicacao: "Quando reconhecemos o valor das pequenas coisas, mudamos nossa forma de ver o mundo. A gratidão pode transformar obstáculos em aprendizado."
    },
    {
      frase: `"Seus sonhos merecem o seu melhor empenho, não a sua dúvida."`,
      explicacao: "A incerteza pode nos impedir de agir, mas todo sonho, por maior que seja, depende de dedicação constante. Escolher focar no potencial em vez do medo é decisivo."
    },
    {
      frase: `"Respeitar seu ritmo não significa andar devagar, mas caminhar com equilíbrio."`,
      explicacao: "Nem sempre o caminho mais rápido é o mais saudável. Saber dosar energia e descanso torna o percurso mais prazeroso e sustentável."
    },
    {
      frase: `"Você não está atrasado; está exatamente onde deve estar para aprender o que precisa."`,
      explicacao: "Comparar seu caminho com o de outros só gera ansiedade. Cada um trilha a própria jornada no tempo necessário para crescer de forma autêntica."
    },
    {
      frase: `"O sucesso é construído nos bastidores das pequenas escolhas diárias."`,
      explicacao: "Pensar em grandes feitos é inspirador, mas são os hábitos e as decisões corriqueiras que formam a base de qualquer conquista duradoura."
    },
    {
      frase: `"A coragem não é a ausência de medo, mas a decisão de agir apesar dele."`,
      explicacao: "Sentir medo é normal; o que faz a diferença é não deixá-lo te paralisar. Toda ação tomada em meio ao receio fortalece o caráter."
    },
    {
      frase: `"A ação correta no momento certo vale mais que mil intenções adiadas."`,
      explicacao: "Procrastinar pode levar a oportunidades perdidas. Quando você se compromete a agir, libera um ciclo positivo de realizações."
    },
    {
      frase: `"As flores mais fortes nascem após as tempestades mais intensas."`,
      explicacao: "A adversidade desafia, mas também fortalece. Quando se supera uma situação difícil, a vida ganha um novo sentido e maior determinação."
    },
    {
      frase: `"Ampliar a mente começa por questionar nossas próprias certezas."`,
      explicacao: "É fácil ficar na zona de conforto, mas a evolução surge do desejo de entender perspectivas diferentes e descobrir novas possibilidades."
    },
    {
      frase: `"Você não precisa de aprovação para ser quem é, apenas de coragem para se expressar."`,
      explicacao: "Buscar aceitação pode nos afastar de nossa essência. Priorizar sua identidade e viver com autenticidade requer coragem e autoconhecimento."
    },
    {
      frase: `"Um dia ruim não define sua história inteira."`,
      explicacao: "Todos enfrentamos momentos difíceis, mas eles não representam quem somos por completo. A vida é feita de fases, e cada fase é uma oportunidade de evolução."
    },
    {
      frase: `"Seu limite de hoje pode se tornar o seu aquecimento de amanhã."`,
      explicacao: "O que parece impossível hoje pode se tornar rotina quando trabalhamos de forma consistente. O crescimento é um processo e não um evento único."
    },
    {
      frase: `"Aproveite a chance de recomeçar quantas vezes forem necessárias."`,
      explicacao: "Nem sempre conseguimos acertar na primeira tentativa. Começar de novo é um privilégio que permite corrigir rotas e evoluir."
    },
    {
      frase: `"A verdadeira fortaleza surge quando você descobre que a vulnerabilidade também é parte de ser humano."`,
      explicacao: "Abraçar nossa fragilidade nos torna mais compreensivos e empáticos, pois nos permite enxergar que ninguém é perfeito o tempo todo."
    },
    {
      frase: `"Cultivar uma mente curiosa faz da vida uma aventura constante."`,
      explicacao: "A rotina pode ficar monótona quando deixamos de fazer perguntas. Curiosidade traz renovação, aprendizado e, muitas vezes, soluções criativas."
    },
    {
      frase: `"Você pode ser o ponto de virada na vida de alguém ao acreditar genuinamente nele."`,
      explicacao: "Ao oferecer encorajamento e confiança, ajudamos as pessoas a enxergar caminhos que antes lhes pareciam impossíveis. É um poder transformador."
    },
    {
      frase: `"Há beleza em cada passo, mesmo nos caminhos mais tortuosos."`,
      explicacao: "A jornada não precisa ser perfeita para ser valiosa. É na imperfeição que encontramos recursos internos para inovar e nos adaptar."
    },
    {
      frase: `"Aprender a dizer não é tão importante quanto saber a hora de dizer sim para si mesmo."`,
      explicacao: "Quando estabelecemos limites e prioridades claras, nossa energia flui para o que realmente importa, gerando maior satisfação pessoal."
    },
    {
      frase: `"A próxima porta se abre quando você decide fechar a que já não te serve mais."`,
      explicacao: "Às vezes, insistir no que já não faz sentido nos impede de enxergar novas oportunidades. O desapego cria espaço para o que é realmente significativo."
    },
    {
      frase: `"Transforme a comparação em inspiração: admire o que te encanta e use como combustível."`,
      explicacao: "Comparar-se de forma saudável pode motivar o crescimento. Em vez de se sentir menor, procure aprender com aquilo que te inspira."
    },
    {
      frase: `"O erro é apenas um mestre disfarçado, ensinando lições valiosas no caminho."`,
      explicacao: "Acertar sempre não garante aprendizado. Muitas vezes, são as falhas que nos mostram os ajustes necessários para evoluir."
    },
    {
      frase: `"Às vezes, o maior ato de coragem é admitir que não precisamos enfrentar tudo sozinhos."`,
      explicacao: "Pedir ajuda não é fraqueza, mas uma forma de conectar-se e aprender com os outros. Dividir a carga pode tornar o desafio mais leve."
    },
    {
      frase: `"Seja paciente com suas próprias transições, pois grandes mudanças pedem tempo."`,
      explicacao: "A vida não é um processo linear. Ter paciência consigo mesmo aumenta a chance de sustentar as conquistas a longo prazo."
    },
    {
      frase: `"A fé em si mesmo pode abrir portas que até então pareciam trancadas."`,
      explicacao: "Quando você acredita que é capaz, enfrenta o mundo de outro jeito. Essa força interna costuma ser notada e valorizada pelas pessoas ao redor."
    },
    {
      frase: `"O silêncio também fala, principalmente sobre o que vale a pena ouvir."`,
      explicacao: "Em meio à correria, o silêncio pode ser revelador. Ele nos faz perceber sentimentos, necessidades e reflexões que passariam despercebidas no barulho."
    },
    {
      frase: `"Sonhar é o começo, planejar é o meio, agir é o que torna tudo real."`,
      explicacao: "Não basta ter grandes ideias; é preciso estruturá-las e buscar concretizá-las passo a passo. A execução é o verdadeiro motor da transformação."
    },
    {
      frase: `"Sua história pode inspirar outras pessoas, mesmo se você ainda não perceber isso."`,
      explicacao: "Cada experiência vivida é única e pode ser um ponto de luz para quem enfrenta algo semelhante. Compartilhar o que aprendemos pode fazer toda a diferença."
    },
    {
        frase: `"Quando você pede a Deus para vencer uma maratona, ele te envia um par de tênis, não uma medalha."`,
        explicacao: "Isso reforça a ideia de que, muitas vezes, não recebemos a conquista final de imediato, mas sim as ferramentas para lutar por ela. O verdadeiro valor está em enfrentar o processo e crescer durante a jornada."
      },
      {
        frase: `"A vida não espera que você esteja pronto para acontecer; ela segue em frente, e você aprende no caminho."`,
        explicacao: "Por mais que tentemos planejar tudo, existem surpresas e oportunidades que surgem ao longo do percurso. É na vivência prática que descobrimos nossas forças e desenvolvemos novas habilidades."
      },
      {
        frase: `"Pequenos ajustes de rota podem levar a destinos totalmente diferentes."`,
        explicacao: "Às vezes, não é necessário mudar tudo de uma só vez. Ajustes graduais e constantes podem resultar em transformações enormes ao longo do tempo."
      },
      {
        frase: `"Amadurecer é entender que não precisamos de controle absoluto, mas de equilíbrio interior."`,
        explicacao: "Às vezes queremos ter tudo sob controle, mas a vida é feita de incertezas. Cultivar um estado de paz interna nos ajuda a lidar melhor com mudanças e desafios."
      },
      {
        frase: `"Seus limites de hoje podem ser sua zona de conforto de amanhã, se você continuar avançando."`,
        explicacao: "Aquilo que agora parece difícil pode tornar-se natural com persistência. Quando você persiste, o impossível gradualmente se transforma em rotina."
      },
      {
        frase: `"Carregar menos bagagem emocional faz a caminhada ser mais leve e proveitosa."`,
        explicacao: "Perdoar, entender e deixar ir o que não nos serve permite avançar com mais clareza. Aliviar pesos do passado abre espaço para conquistas futuras."
      },
      {
        frase: `"Esperar o momento perfeito pode te fazer perder a chance ideal."`,
        explicacao: "Agir mesmo diante de incertezas é muitas vezes o que diferencia quem realiza de quem apenas sonha. O instante perfeito raramente existe; é você quem o constrói."
      },
      {
        frase: `"A vida te dá várias folhas em branco; o que você escreve nelas depende apenas de você."`,
        explicacao: "Cada dia é uma oportunidade de começar algo novo ou de continuar algo bom. Sua história se constrói a partir das decisões e atitudes que você escolhe ter."
      },
      {
        frase: `"Todo mundo carrega uma história complexa por trás do sorriso que mostra ao mundo."`,
        explicacao: "Lembrar que cada pessoa enfrenta suas próprias batalhas nos torna mais empáticos. O apoio e a compreensão que oferecemos podem ter um impacto profundo."
      },
      {
        frase: `"Há dias em que plantar a semente é a maior vitória possível; o tempo se encarrega do resto."`,
        explicacao: "A ansiedade pelo resultado imediato pode ofuscar o valor do processo. Faça a sua parte hoje, e confie que cada esforço sincero gera frutos no momento certo."
      },
      {
        frase: `"Para ver a aurora, é preciso atravessar a escuridão da madrugada."`,
        explicacao: "Em muitos casos, passamos por momentos difíceis antes de alcançarmos uma fase de luz. A perseverança durante a ‘noite’ prepara você para apreciar o nascer de um novo dia."
      },
      {
        frase: `"Quem faz o que ama transpira paixão até mesmo nos detalhes mais simples."`,
        explicacao: "Quando a energia vem de dentro, o esforço deixa de ser pesado e se torna uma extensão do que te inspira. É nesse estado que o verdadeiro potencial floresce."
      },
      {
        frase: `"Seguir em frente não significa esquecer, mas aprender a levar a saudade com carinho e coragem."`,
        explicacao: "Muitas vezes, carregar lembranças pode ser um ato de amor e superação. O passado não precisa ser um peso se você o enxerga como parte do que te moldou."
      },
      {
        frase: `"Você não precisa ser perfeito para inspirar alguém; basta ser verdadeiro."`,
        explicacao: "A vulnerabilidade e a honestidade criam conexões reais. Quando você se mostra humano, imperfeito, acaba encorajando outros a acreditarem também em suas forças e fraquezas."
      },
      {
        frase: `"O maior impedimento para a sua evolução pode ser o medo de largar aquilo que já não te impulsiona."`,
        explicacao: "Podemos ficar presos em situações familiares por receio de mudanças. Mas libertar-se do que não agrega é abrir espaço para novas oportunidades."
      },
      {
        frase: `"Ser humilde não significa se colocar abaixo de todos, mas reconhecer que há sempre algo a aprender."`,
        explicacao: "A humildade nos torna receptivos a novos conhecimentos e experiências. Quando estamos abertos a aprender, crescemos constantemente, independente do nível que julgamos ter."
      },
      {
        frase: `"Você não é o seu erro, mas o aprendizado que tira dele"`,
        explicacao: "Cometer falhas faz parte de qualquer trajetória. O diferencial está em extrair a lição e adaptar-se, transformando deslizes em degraus para o sucesso."
      },
      {
        frase: `"Um passo ousado pode revelar um caminho que você jamais imaginou existir."`,
        explicacao: "Às vezes, só descobrimos novas possibilidades quando arriscamos sair do conhecido. É no território inexplorado que surgem os maiores crescimentos."
      },
      {
        frase: `"Para quem busca crescer, não existem derrotas definitivas, apenas reorientações temporárias."`,
        explicacao: "Fracassos podem ser vistos como pontos de virada. Se absorvemos o aprendizado e ajustamos a rota, cada queda se transforma em impulso renovado."
      },
      {
        frase: `"A cada recomeço, você leva consigo um novo acervo de experiências."`,
        explicacao: "Recomeçar não zera o que você já viveu; pelo contrário, agrega todo o conhecimento adquirido. É como abrir um novo capítulo com bagagem mais rica."
      },
      {
        frase: `"Quanto mais você agradece, mais motivos encontra para continuar agradecendo."`,
        explicacao: "A gratidão treina a mente para enxergar oportunidades e conquistas. É uma corrente de positividade que transforma o modo como você vê o mundo."
      },
      {
        frase: `"O primeiro ‘não’ pode te proteger de muitos arrependimentos futuros."`,
        explicacao: "Aprender a estabelecer limites é parte fundamental do autocuidado. Saber dizer ‘não’ na hora certa evita desgastes e mantém seu foco no que realmente importa."
      },
      {
        frase: `"Sair da zona de conforto nem sempre é fácil, mas ficar nela pode custar caro demais."`,
        explicacao: "Acomodar-se é tentador a curto prazo, mas às vezes impede crescimento e realização. Encarar o incômodo de evoluir é um investimento que traz recompensas duradouras."
      },
      {
        frase: `"A vida não exige perfeição, mas coragem para melhorar a cada dia."`,
        explicacao: "Não se trata de alcançar um ideal inatingível, mas de progredir passo a passo. Ao reconhecer nossa humanidade, encontramos forças para dar o próximo salto."
      },
      {
        frase: `"A paciência floresce quando entendemos que o tempo tem seu próprio tempo."`,
        explicacao: "Nem tudo acontece no ritmo que desejamos. Cultivar a paciência é aprender a respeitar processos, a maturação de ideias e as oportunidades que ainda estão por vir."
      },
      {
        frase: `"Você é muito mais forte do que o seu momento mais frágil."`,
        explicacao: "Às vezes, um tropeço faz parecer que tudo está perdido, mas você carrega recursos internos que, se despertados, podem te levar além do que imagina."
      },
      {
        frase: `"O seu ‘hoje’ pode ser o futuro que alguém sonhou; valorize-o."`,
        explicacao: "Em meio à correria, esquecemos que nossas conquistas de hoje são desejos realizados. Celebrar o presente ajuda a manter a motivação e a sensação de plenitude."
      },
      {
        frase: `"O verdadeiro significado da conquista está nas renúncias que fizemos para alcançá-la."`,
        explicacao: "Qualquer vitória carrega um histórico de escolhas, sacrifícios e ajustes de rota. Honrar esse processo torna a vitória ainda mais especial."
      },
      {
        frase: `"Quando você cuida de si mesmo, acaba cuidando melhor das pessoas ao seu redor."`,
        explicacao: "Colocar-se em primeiro lugar não é egoísmo, mas sabedoria. Estando bem, você se torna mais disponível para apoiar e inspirar quem te acompanha."
      },
      {
        frase: `"A vida é curta demais para viver de forma rasa."`,
        explicacao: "Mergulhar fundo em cada experiência, relacionamento e aprendizado traz riqueza à nossa história. Cada momento tem potencial para ser transformador."
      }
    ];
  
  

// ====== Seletores do DOM ======
const dailyQuoteEl = document.getElementById("dailyQuote");
const explanationEl = document.getElementById("explanation");
const shareBtn = document.getElementById("shareBtn");
const motivationCard = document.getElementById("motivationCard");

// ====== Exibir Frase do Dia ======
function showDailyMessage() {
  const storedDate = localStorage.getItem("motivationDate");
  const storedIndex = localStorage.getItem("motivationIndex");
  const today = new Date().toDateString();  // ex: "Thu Dec 25 2024"

  let index;

  // Se não há data salva ou se mudou o dia:
  if (!storedDate || storedDate !== today) {
    // Gera novo índice para a frase do dia
    index = generateDailyIndex();
    // Salva no localStorage
    localStorage.setItem("motivationDate", today);
    localStorage.setItem("motivationIndex", index);
  } else {
    index = parseInt(storedIndex, 10);
  }

  const dailyMsg = messages[index];
  dailyQuoteEl.textContent = dailyMsg.frase;
  explanationEl.textContent = dailyMsg.explicacao;
}

function generateDailyIndex() {
  // OPÇÃO 1: random
  // return Math.floor(Math.random() * messages.length);

  // OPÇÃO 2: baseado no dia do ano (para fixar a mesma frase em cada dia)
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  return dayOfYear % messages.length;
}

// ====== Compartilhar / Salvar como Imagem ======
function shareCard() {
  html2canvas(motivationCard).then(canvas => {
    const dataURL = canvas.toDataURL("image/png");

    // Fallback: Baixar a imagem
    const link = document.createElement("a");
    link.download = "motivacao.png";
    link.href = dataURL;
    link.click();
  });
}

// ====== Alternar Tema Automático (Claro/Escuro) ======
function setThemeBasedOnTime() {
  const now = new Date();
  const hour = now.getHours();
  const isDark = hour >= 18 || hour < 6; // Das 18h às 6h é escuro

  if (isDark) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

// ====== Animação de Estrelas Cadentes ======
function createShootingStars() {
  const shootingStarsContainer = document.querySelector('.shooting-stars');
  const numberOfShootingStars = 10; // Aumentado para mais estrelas cadentes

  for (let i = 0; i < numberOfShootingStars; i++) {
    const star = document.createElement('div');
    star.classList.add('shooting-star');

    // Posicionamento aleatório
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    // Direção aleatória: para a direita ou esquerda
    const direction = Math.random() > 0.5 ? 'right' : 'left';
    star.classList.add(direction);

    // Delay aleatório para animação
    star.style.animationDelay = `${Math.random() * 5}s`;

    shootingStarsContainer.appendChild(star);
  }
}

// ====== Service Worker para PWA ======
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").then(
        registration => {
          console.log("Service Worker registrado:", registration.scope);
        },
        err => {
          console.log("Falha ao registrar Service Worker:", err);
        }
      );
    });
  }
}

// ====== Inicialização ======
document.addEventListener("DOMContentLoaded", () => {
  setThemeBasedOnTime();
  createShootingStars();
  showDailyMessage();
  registerServiceWorker();

  shareBtn.addEventListener("click", shareCard);
});

