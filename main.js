const perguntas = [
    {
        enunciado: "Jesus estava viajando da Judeia para a Galileia e parou em um poço na cidade samaritana de Sicar. La, ele encontra uma mulher tirando água. O que ele faz?
",
        alternativas: [
            {
                texto: "Jesus pede água à mulher, iniciando uma conversa com ela e demonstrando inclusividade.",
                afirmacao: "Você compreendeu que a atitude de Jesus quebrava as barreiras culturais da época."
            },
            {
                texto: "Ele ignora a mulher, pois os judeus consideravam os samaritanos como pessoas estranhas.",
                afirmacao: "Voce interpretou a cena ignorando a atitude de aproximação de Jesus aos samaritanos."
            }
        ]
    },
    {
        enunciado: "Durante a conversa, Jesus demonstra conhecer as circunstâncias passadas da mulher, incluindo seus casamentos fracassados. Como Jesus reage?",
        alternativas: [
            {
                texto: "Ele a julga pelos seus erros e se afasta, encerrando a conversa ali mesmo.",
                afirmacao: "Sua visão focou em puniçao, indo contra a compaixão descrita no texto."
            },
            {
                texto: "Ele mostra compaixão e oferece a ela água viva que saciara sua sede para sempre.",
                afirmacao: "Voce percebeu o poder da compaixão de Jesus, que acolhe as pessoas independentemente de seu passado."
            }
        ]
    },
    {
        enunciado: "O assunto entre eles muda e Jesus ensina sobre onde e como as pessoas devem adorar. O que Ele revela sobre a verdadeira adoração?",
        alternativas: [
            {
                texto: "Jesus afirma que os fieis devem seguir regras e adorar apenas em um templo especifico.",
                afirmacao: "Ao escolher os rituais locais, você não captou a quebra de costumes ensinada naquele momento."
            },
            {
                texto: "Jesus ensina que os verdadeiros adoradores adorarão em espirito e verdade, sem focar em um local especifico.",
                afirmacao: "Voce entendeu a essencia da mensagem, que valoriza a presenca espiritual verdadeira."
            }
        ]
    },
    {
        enunciado: "Em Joao 4, os ensinamentos de Jesus encorajam algo vital sobre a nossa relação com Deus. O que a passagem quer estimular nos crentes?",
        alternativas: [
            {
                texto: "Buscar um relacionamento íntimo e pessoal com Deus, mais do que seguir apenas a observância religiosa.",
                afirmacao: "Acertou ao focar no relacionamento direto e pessoal com o Criador."
            },
            {
                texto: "Mostrar que a fé só tem valor se a pessoa realizar um conjunto de práticas religiosas perfeitamente.",
                afirmacao: "Você valorizou as regras e movimentos externos, perdendo o foco principal do Evangelho."
            }
        ]
    },
    {
        enunciado: "Após entender que Jesus é o Messias, a mulher se transforma de cética para crente. O que o encontro com a mulher samaritana serve como exemplo?",
        alternativas: [
            {
                texto: "Da capacidade de Jesus de transformar até mesmo os indivíduos mais quebrantados e rejeitados.",
                afirmacao: "Reconhece a forte mensagem de que Jesus pode transformar vidas independentemente do histórico."
            },
            {
                texto: "De que apenas as pessoas sem falhas podem ser tocadas pela água viva.",
                afirmacao: "Sua perspectiva limitou o alcance da mensagem cristã sobre perdão e mudança."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".botao-jogar-novamente");

function mostraPergunta() {
    if(atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcao) {
    historiaFinal += opcao.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O que suas respostas dizem sobre o seu entendimento:";
    caixaAlternativas.innerHTML = "";
    caixaResultado.style.display = "block";
    textoResultado.textContent = historiaFinal;
}

botaoJogarNovamente.addEventListener("click", () => {
    atual = 0;
    historiaFinal = "";
    caixaResultado.style.display = "none";
    mostraPergunta();
});

// Inicia o Quiz
mostraPergunta();