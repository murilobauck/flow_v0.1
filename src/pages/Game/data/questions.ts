export interface Question {
  id: number;
  question: string;
  options: string[];
  correct_index: number;
}

export const questions: Question[] = [
  { id: 1, question: "Qual é a fórmula química da água?", options: ["H2O", "CO2", "NaCl", "O2"], correct_index: 0 },
  { id: 2, question: "Qual é o maior planeta do nosso sistema solar?", options: ["Terra", "Marte", "Júpiter", "Saturno"], correct_index: 2 },
  { id: 3, question: "Quem pintou a famosa obra 'Monalisa'?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], correct_index: 1 },
  { id: 4, question: "Qual é a capital do Brasil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct_index: 2 },
  { id: 5, question: "Quantas cores tem um arco-íris?", options: ["5", "6", "7", "8"], correct_index: 2 },
  { id: 6, question: "Qual animal é popularmente conhecido como o 'Rei da Selva'?", options: ["Tigre", "Leão", "Elefante", "Gorila"], correct_index: 1 },
  { id: 7, question: "Em que ano terminou a Segunda Guerra Mundial?", options: ["1939", "1945", "1918", "1950"], correct_index: 1 },
  { id: 8, question: "Qual é a substância natural mais dura encontrada na Terra?", options: ["Ouro", "Ferro", "Quartzo", "Diamante"], correct_index: 3 },
  { id: 9, question: "Quem escreveu a clássica peça 'Romeu e Julieta'?", options: ["Machado de Assis", "William Shakespeare", "Fernando Pessoa", "Charles Dickens"], correct_index: 1 },
  { id: 10, question: "Qual é o idioma oficial falado no Brasil?", options: ["Espanhol", "Português", "Inglês", "Francês"], correct_index: 1 },
  { id: 11, question: "Qual planeta é conhecido como o 'Planeta Vermelho'?", options: ["Vênus", "Júpiter", "Marte", "Mercúrio"], correct_index: 2 },
  { id: 12, question: "Quantos dias tem um ano bissexto?", options: ["364", "365", "366", "367"], correct_index: 2 },
  { id: 13, question: "Qual oceano banha a costa leste do Brasil?", options: ["Oceano Pacífico", "Oceano Índico", "Oceano Ártico", "Oceano Atlântico"], correct_index: 3 },
  { id: 14, question: "A que temperatura a água congela na escala Celsius?", options: ["0 graus", "10 graus", "100 graus", "-10 graus"], correct_index: 0 },
  { id: 15, question: "Quem foi o primeiro homem a pisar na Lua?", options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"], correct_index: 2 },
  { id: 16, question: "Qual é o principal alimento na dieta de um urso panda?", options: ["Peixe", "Carne", "Eucalipto", "Bambu"], correct_index: 3 },
  { id: 17, question: "Em qual continente está localizado o Deserto do Saara?", options: ["Ásia", "África", "América do Sul", "Oceania"], correct_index: 1 },
  { id: 18, question: "Qual é o maior mamífero do mundo?", options: ["Elefante Africano", "Rinoceronte", "Baleia Azul", "Girafa"], correct_index: 2 },
  { id: 19, question: "Qual cor obtemos ao misturar azul e amarelo?", options: ["Verde", "Roxo", "Laranja", "Marrom"], correct_index: 0 },
  { id: 20, question: "Quem desenvolveu a famosa Teoria da Relatividade?", options: ["Isaac Newton", "Nikola Tesla", "Galileu Galilei", "Albert Einstein"], correct_index: 3 },
  { id: 21, question: "Quantas patas tem uma aranha?", options: ["6", "8", "10", "12"], correct_index: 1 },
  { id: 22, question: "Qual é a moeda oficial utilizada no Japão?", options: ["Yuan", "Won", "Iene", "Dólar"], correct_index: 2 },
  { id: 23, question: "Qual gás as plantas absorvem da atmosfera para realizar a fotossíntese?", options: ["Oxigênio", "Nitrogênio", "Hélio", "Gás Carbônico"], correct_index: 3 },
  { id: 24, question: "Qual é o menor país do mundo em extensão territorial?", options: ["Mônaco", "Vaticano", "San Marino", "Liechtenstein"], correct_index: 1 },
  { id: 25, question: "Em qual cidade europeia fica a Torre Eiffel?", options: ["Londres", "Roma", "Berlim", "Paris"], correct_index: 3 },
  { id: 26, question: "Qual é o ingrediente principal do prato guacamole?", options: ["Tomate", "Abacate", "Milho", "Feijão"], correct_index: 1 },
  { id: 27, question: "Quantos zeros existem no número 'um milhão'?", options: ["5", "6", "7", "8"], correct_index: 1 },
  { id: 28, question: "Qual ave é mundialmente reconhecida como o símbolo da paz?", options: ["Águia", "Coruja", "Pomba", "Cisne"], correct_index: 2 },
  { id: 29, question: "Qual estrela fica no centro do nosso sistema solar?", options: ["Estrela Polar", "Sirius", "O Sol", "Alpha Centauri"], correct_index: 2 },
  { id: 30, question: "Qual personagem do folclore brasileiro é conhecido por ter uma perna só?", options: ["Curupira", "Mula sem cabeça", "Boto-cor-de-rosa", "Saci-Pererê"], correct_index: 3 }
];
