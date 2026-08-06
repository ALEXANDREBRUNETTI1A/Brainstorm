// Vetor contendo as 5 perguntas baseadas no Evangelho de Joao 4
const perguntas = [
    {
        enunciado: "Ao passar por Samaria, Jesus para junto ao poco de Jaco e pede agua a uma mulher samaritana. Qual e a sua atitude diante dessa quebra de barreiras culturais e sociais?",
        alternativas: [
            {
                texto: "Voce valoriza a atitude de Jesus em superar preconceitos historicos para levar a mensagem a todas as pessoas.",
                afirmacao: "Voce demonstra uma visao inclusiva, reconhecendo que a fe deve superar barreiras culturais e sociais."
            },
            {
                texto: "Voce acha arriscado misturar grupos com rivalidades antigas e prefere manter as praticas tradicionais de separacao.",
                afirmacao: "Voce prioriza a preservacao das normas sociais tradicionais em vez da abertura para o dialogo."
            }
        ]
    },
    {
        enunciado: "Jesus afirma que quem beber da agua do poco voltara a ter sede, mas quem beber da agua que ele der nunca mais tera sede. O que essa declaracao representa para voce?",
        alternativas: [
            {
                texto: "Voce entende que a agua viva representa a graca e o Espirito Santo, que preenchem plenamente a sede espiritual humana.",
                afirmacao: "Voce busca em Jesus a satisfacao espiritual profunda e permanente que o mundo nao pode oferecer."
            },
            {
                texto: "Voce interpreta a agua apenas em sentido literal e considera a afirmacao de Jesus dificil de compreender na pratica.",
                afirmacao: "Voce foca nos aspectos materiais e concretos, tendo dificuldade para perceber os significados espirituais."
            }
        ]
    },
    {
        enunciado: "A mulher samaritana questiona sobre o local correto para adorar, se no Monte Gerizim ou em Jerusalem. Jesus responde que os verdadeiros adoradores adorarao o Pai em espirito e em verdade. Como voce aplica esse ensino?",
        alternativas: [
            {
                texto: "Voce acredita que a verdadeira adoracao nao depende de locais fisicos, mas da sinceridade do coracao e da verdade de Deus.",
                afirmacao: "Voce valoriza a fe autentica e interior em qualquer lugar, superando debates sobre estruturas fisicas."
            },
            {
                texto: "Voce defende que o templo ou o local sagrado especifico e o unico fator determinante para a validade da adoracao.",
                afirmacao: "Voce foca a sua fe na observancia de rituais e locais sagrados tradicionais."
            }
        ]
    },
    {
        enunciado: "Quando os discipulos pedem para Jesus comer, ele declara que a sua comida e fazer a vontade daquele que o enviou e realizar a sua obra, apontando para os campos prontos para a colheita. Qual e a sua percepcao sobre essa missao?",
        alternativas: [
            {
                texto: "Voce se sente motivado a participar ativamente da missao de compartilhar a palavra de Deus com sensibilidade ao momento espiritual.",
                afirmacao: "Voce prioriza o servico ao reino de Deus e reconhece as oportunidades de proclamar o evangelho."
            },
            {
                texto: "Voce prefere focar apenas nas necessidades materiais e rotineiras do momento, sem se envolver na obra espiritual.",
                afirmacao: "Voce mantem o foco nas tarefas imediatas do cotidiano, deixando a missao espiritual em segundo plano."
            }
        ]
    },
    {
        enunciado: "Um oficial do rei pede a Jesus que cure seu filho doente. Jesus diz 'Vai, o teu filho vive', e o homem creu na palavra sem precisar ver o milagre no mesmo instante. Como voce enxerga essa atitude de fe?",
        alternativas: [
            {
                texto: "Voce considera exemplar a fe que confia na palavra e na autoridade de Jesus mesmo sem ver sinais visiveis imediatos.",
                afirmacao: "Voce desenvolve uma fe madura baseada na confianca absoluta na palavra de Cristo."
            },
            {
                texto: "Voce acha que e necessario ver provas concretas e milagres visiveis antes de depositar qualquer confianca.",
                afirmacao: "Voce condiciona a sua fe a evidencias tangiveis e manifestacoes visiveis."
            }
        ]
    }
];

let indicePerguntaAtual = 0;
const respostasSelecionadas = [];

function carregarPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    
    // Atualizar indicacao visual do progresso
    const numeroPergunta = indicePerguntaAtual + 1;
    document.getElementById("texto-progresso").innerText = "Pergunta " + numeroPergunta + " de " + perguntas.length;
    
    const porcentagem = (numeroPergunta / perguntas.length) * 100;
    document.getElementById("barra-preenchimento").style.width = porcentagem + "%";
    
    // Exibir enunciado da pergunta
    document.getElementById("enunciado-pergunta").innerText = perguntaAtual.enunciado;
    
    // Renderizar opcoes de resposta
    const containerOpcoes = document.getElementById("opcoes-container");
    containerOpcoes.innerHTML = "";
    
    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.className = "btn-opcao";
        botao.innerText = alternativa.texto;
        botao.onclick = () => selecionarResposta(index);
        containerOpcoes.appendChild(botao);
    });
}

function selecionarResposta(indiceAlternativa) {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    const alternativaEscolhida = perguntaAtual.alternativas[indiceAlternativa];
    
    // Registrar a escolha do usuario
    respostasSelecionadas.push({
        perguntaNumero: indicePerguntaAtual + 1,
        texto: alternativaEscolhida.texto,
        afirmacao: alternativaEscolhida.afirmacao
    });
    
    // Avancar para a proxima pergunta
    indicePerguntaAtual++;
    
    if (indicePerguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        exibirResultado();
    }
}

function exibirResultado() {
    document.getElementById("card-pergunta").classList.add("escondido");
    document.getElementById("progresso-container").classList.add("escondido");
    
    const cardResultado = document.getElementById("card-resultado");
    cardResultado.classList.remove("escondido");
    
    document.getElementById("resumo-resultado").innerText = "Voce concluiu todas as 5 questoes sobre Teologia de Joao 4. Veja abaixo o perfil gerado a partir de suas respostas:";
    
    const listaAfirmacoes = document.getElementById("lista-afirmacoes");
    listaAfirmacoes.innerHTML = "";
    
    respostasSelecionadas.forEach((item) => {
        const divItem = document.createElement("div");
        divItem.className = "item-afirmacao";
        divItem.innerText = "Questao " + item.perguntaNumero + ": " + item.afirmacao;
        listaAfirmacoes.appendChild(divItem);
    });
}

function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    respostasSelecionadas.length = 0;
    
    document.getElementById("card-resultado").classList.add("escondido");
    document.getElementById("card-pergunta").classList.remove("escondido");
    document.getElementById("progresso-container").classList.remove("escondido");
    
    carregarPergunta();
}

// Inicializar a exibicao da primeira pergunta ao carregar a pagina
window.onload = carregarPergunta;