import type{ QuestionProtocol } from "./types/questionTypes";

export const questionsHistory: QuestionProtocol[] = [
  {
    description: "Quem foi o primeiro imperador do Brasil?",
    answers: [
      { content: "Dom Pedro I", isCorrect: true },
      { content: "Dom Pedro II", isCorrect: false },
      { content: "Tiradentes", isCorrect: false },
      { content: "Getúlio Vargas", isCorrect: false }
    ]
  },
  {
    description: "Qual evento marcou a independência do Brasil?",
    answers: [
      { content: "Proclamação da República", isCorrect: false },
      { content: "Grito do Ipiranga", isCorrect: true },
      { content: "Inconfidência Mineira", isCorrect: false },
      { content: "Revolução Farroupilha", isCorrect: false }
    ]
  },
  {
    description: "Quem liderou a Inconfidência Mineira?",
    answers: [
      { content: "José Bonifácio", isCorrect: false },
      { content: "Tiradentes", isCorrect: true },
      { content: "Dom Pedro II", isCorrect: false },
      { content: "Duque de Caxias", isCorrect: false }
    ]
  },
  {
    description: "Em que ano foi proclamada a República no Brasil?",
    answers: [
      { content: "1822", isCorrect: false },
      { content: "1889", isCorrect: true },
      { content: "1930", isCorrect: false },
      { content: "1964", isCorrect: false }
    ]
  },
  {
    description: "Quem foi o presidente do Brasil durante a Era Vargas?",
    answers: [
      { content: "Juscelino Kubitschek", isCorrect: false },
      { content: "Getúlio Vargas", isCorrect: true },
      { content: "Floriano Peixoto", isCorrect: false },
      { content: "Tancredo Neves", isCorrect: false }
    ]
  },
  {
    description: "Qual movimento resultou na abolição da escravidão no Brasil?",
    answers: [
      { content: "Lei Áurea", isCorrect: true },
      { content: "Constituição de 1824", isCorrect: false },
      { content: "Revolução de 1930", isCorrect: false },
      { content: "Golpe Militar de 1964", isCorrect: false }
    ]
  },
  {
    description: "Quem foi a princesa responsável pela assinatura da Lei Áurea?",
    answers: [
      { content: "Princesa Isabel", isCorrect: true },
      { content: "Rainha Maria I", isCorrect: false },
      { content: "Carlota Joaquina", isCorrect: false },
      { content: "Leopoldina", isCorrect: false }
    ]
  },
  {
    description: "Qual presidente ficou conhecido pelo lema '50 anos em 5'?",
    answers: [
      { content: "Juscelino Kubitschek", isCorrect: true },
      { content: "Getúlio Vargas", isCorrect: false },
      { content: "Fernando Henrique Cardoso", isCorrect: false },
      { content: "Luiz Inácio Lula da Silva", isCorrect: false }
    ]
  },
  {
    description: "Qual foi a capital do Brasil antes de Brasília?",
    answers: [
      { content: "São Paulo", isCorrect: false },
      { content: "Rio de Janeiro", isCorrect: true },
      { content: "Salvador", isCorrect: false },
      { content: "Belo Horizonte", isCorrect: false }
    ]
  },
  {
    description: "Quem foi o líder militar que se destacou na Guerra do Paraguai?",
    answers: [
      { content: "Duque de Caxias", isCorrect: true },
      { content: "Barão de Mauá", isCorrect: false },
      { content: "José Bonifácio", isCorrect: false },
      { content: "Floriano Peixoto", isCorrect: false }
    ]
  }
];

export const questionsGeography: QuestionProtocol[] = [
  {
    description: "Qual é a capital da Austrália?",
    answers: [
      { content: "Sydney", isCorrect: false },
      { content: "Melbourne", isCorrect: false },
      { content: "Canberra", isCorrect: true },
      { content: "Brisbane", isCorrect: false }
    ]
  },
  {
    description: "Qual é o maior deserto do mundo?",
    answers: [
      { content: "Saara", isCorrect: false },
      { content: "Deserto da Arábia", isCorrect: false },
      { content: "Antártida", isCorrect: true },
      { content: "Kalahari", isCorrect: false }
    ]
  },
  {
    description: "Qual país possui o maior número de habitantes?",
    answers: [
      { content: "Índia", isCorrect: false },
      { content: "China", isCorrect: true },
      { content: "Estados Unidos", isCorrect: false },
      { content: "Indonésia", isCorrect: false }
    ]
  },
  {
    description: "Qual é o rio mais extenso do mundo?",
    answers: [
      { content: "Rio Nilo", isCorrect: true },
      { content: "Rio Amazonas", isCorrect: false },
      { content: "Rio Yangtzé", isCorrect: false },
      { content: "Rio Mississipi", isCorrect: false }
    ]
  },
  {
    description: "Qual é o ponto mais alto da Terra?",
    answers: [
      { content: "Monte Kilimanjaro", isCorrect: false },
      { content: "Monte Everest", isCorrect: true },
      { content: "Monte Aconcágua", isCorrect: false },
      { content: "Monte McKinley", isCorrect: false }
    ]
  },
  {
    description: "Qual país é conhecido como 'Terra do Sol Nascente'?",
    answers: [
      { content: "China", isCorrect: false },
      { content: "Japão", isCorrect: true },
      { content: "Coreia do Sul", isCorrect: false },
      { content: "Tailândia", isCorrect: false }
    ]
  },
  {
    description: "Qual oceano é o maior em extensão?",
    answers: [
      { content: "Oceano Atlântico", isCorrect: false },
      { content: "Oceano Índico", isCorrect: false },
      { content: "Oceano Pacífico", isCorrect: true },
      { content: "Oceano Ártico", isCorrect: false }
    ]
  },
  {
    description: "Qual é a capital do Canadá?",
    answers: [
      { content: "Toronto", isCorrect: false },
      { content: "Vancouver", isCorrect: false },
      { content: "Ottawa", isCorrect: true },
      { content: "Montreal", isCorrect: false }
    ]
  },
  {
    description: "Qual cordilheira abriga o Monte Everest?",
    answers: [
      { content: "Andes", isCorrect: false },
      { content: "Himalaia", isCorrect: true },
      { content: "Alpes", isCorrect: false },
      { content: "Montes Urais", isCorrect: false }
    ]
  },
  {
    description: "Qual país tem maior área territorial?",
    answers: [
      { content: "China", isCorrect: false },
      { content: "Estados Unidos", isCorrect: false },
      { content: "Rússia", isCorrect: true },
      { content: "Canadá", isCorrect: false }
    ]
  }
];

export const questionsMath: QuestionProtocol[] = [
  {
    description: "Qual é o valor de 7 × 8?",
    answers: [
      { content: "54", isCorrect: false },
      { content: "56", isCorrect: true },
      { content: "64", isCorrect: false },
      { content: "48", isCorrect: false }
    ]
  },
  {
    description: "Qual é a raiz quadrada de 144?",
    answers: [
      { content: "10", isCorrect: false },
      { content: "11", isCorrect: false },
      { content: "12", isCorrect: true },
      { content: "13", isCorrect: false }
    ]
  },
  {
    description: "Resolva: 25 ÷ 5",
    answers: [
      { content: "4", isCorrect: false },
      { content: "5", isCorrect: true },
      { content: "6", isCorrect: false },
      { content: "7", isCorrect: false }
    ]
  },
  {
    description: "Qual é o valor de π arredondado para duas casas decimais?",
    answers: [
      { content: "3.12", isCorrect: false },
      { content: "3.14", isCorrect: true },
      { content: "3.15", isCorrect: false },
      { content: "3.16", isCorrect: false }
    ]
  },
  {
    description: "Qual é o resultado de 2³?",
    answers: [
      { content: "6", isCorrect: false },
      { content: "8", isCorrect: true },
      { content: "9", isCorrect: false },
      { content: "12", isCorrect: false }
    ]
  },
  {
    description: "Qual é a solução da equação: x + 5 = 12?",
    answers: [
      { content: "x = 5", isCorrect: false },
      { content: "x = 6", isCorrect: true },
      { content: "x = 7", isCorrect: false },
      { content: "x = 8", isCorrect: false }
    ]
  },
  {
    description: "Qual é o perímetro de um quadrado com lado de 9 cm?",
    answers: [
      { content: "36 cm", isCorrect: true },
      { content: "18 cm", isCorrect: false },
      { content: "27 cm", isCorrect: false },
      { content: "45 cm", isCorrect: false }
    ]
  },
  {
    description: "Qual é a área de um triângulo com base 10 cm e altura 6 cm?",
    answers: [
      { content: "30 cm²", isCorrect: true },
      { content: "60 cm²", isCorrect: false },
      { content: "15 cm²", isCorrect: false },
      { content: "20 cm²", isCorrect: false }
    ]
  },
  {
    description: "Qual é o próximo número na sequência: 2, 4, 8, 16, ...?",
    answers: [
      { content: "24", isCorrect: false },
      { content: "32", isCorrect: true },
      { content: "20", isCorrect: false },
      { content: "36", isCorrect: false }
    ]
  },
  {
    description: "Qual é o valor de 100% de 50?",
    answers: [
      { content: "25", isCorrect: false },
      { content: "50", isCorrect: true },
      { content: "75", isCorrect: false },
      { content: "100", isCorrect: false }
    ]
  }
];

export const questionsSciences: QuestionProtocol[] = [
  {
    description: "Quem formulou a teoria da relatividade?",
    answers: [
      { content: "Isaac Newton", isCorrect: false },
      { content: "Albert Einstein", isCorrect: true },
      { content: "Galileu Galilei", isCorrect: false },
      { content: "Nikola Tesla", isCorrect: false }
    ]
  },
  {
    description: "Qual cientista descobriu a penicilina?",
    answers: [
      { content: "Louis Pasteur", isCorrect: false },
      { content: "Alexander Fleming", isCorrect: true },
      { content: "Marie Curie", isCorrect: false },
      { content: "Robert Koch", isCorrect: false }
    ]
  },
  {
    description: "Qual foi o primeiro país a enviar um ser humano ao espaço?",
    answers: [
      { content: "Estados Unidos", isCorrect: false },
      { content: "União Soviética", isCorrect: true },
      { content: "China", isCorrect: false },
      { content: "Alemanha", isCorrect: false }
    ]
  },
  {
    description: "Quem é considerado o 'pai da computação'?",
    answers: [
      { content: "Alan Turing", isCorrect: true },
      { content: "Bill Gates", isCorrect: false },
      { content: "Charles Babbage", isCorrect: false },
      { content: "Steve Jobs", isCorrect: false }
    ]
  },
  {
    description: "Qual elemento químico é representado pelo símbolo 'O'?",
    answers: [
      { content: "Ouro", isCorrect: false },
      { content: "Oxigênio", isCorrect: true },
      { content: "Ósmio", isCorrect: false },
      { content: "Prata", isCorrect: false }
    ]
  },
  {
    description: "Qual foi o primeiro satélite artificial lançado ao espaço?",
    answers: [
      { content: "Apollo 11", isCorrect: false },
      { content: "Sputnik 1", isCorrect: true },
      { content: "Voyager 1", isCorrect: false },
      { content: "Hubble", isCorrect: false }
    ]
  },
  {
    description: "Quem inventou o telefone?",
    answers: [
      { content: "Thomas Edison", isCorrect: false },
      { content: "Alexander Graham Bell", isCorrect: true },
      { content: "Nikola Tesla", isCorrect: false },
      { content: "Guglielmo Marconi", isCorrect: false }
    ]
  },
  {
    description: "Qual cientista foi pioneira nos estudos sobre radioatividade?",
    answers: [
      { content: "Marie Curie", isCorrect: true },
      { content: "Rosalind Franklin", isCorrect: false },
      { content: "Ada Lovelace", isCorrect: false },
      { content: "Jane Goodall", isCorrect: false }
    ]
  },
  {
    description: "Qual empresa lançou o primeiro iPhone em 2007?",
    answers: [
      { content: "Microsoft", isCorrect: false },
      { content: "Apple", isCorrect: true },
      { content: "Samsung", isCorrect: false },
      { content: "Nokia", isCorrect: false }
    ]
  },
  {
    description: "Qual é a partícula subatômica com carga negativa?",
    answers: [
      { content: "Próton", isCorrect: false },
      { content: "Nêutron", isCorrect: false },
      { content: "Elétron", isCorrect: true },
      { content: "Fóton", isCorrect: false }
    ]
  }
];

export const questionsArtAndCulture: QuestionProtocol[] = [
  {
    description: "Qual movimento artístico é associado a Leonardo da Vinci e Michelangelo?",
    answers: [
      { content: "Renascimento", isCorrect: true },
      { content: "Barroco", isCorrect: false },
      { content: "Romantismo", isCorrect: false },
      { content: "Impressionismo", isCorrect: false }
    ]
  },
  {
    description: "Quem escreveu 'Dom Quixote'?",
    answers: [
      { content: "William Shakespeare", isCorrect: false },
      { content: "Miguel de Cervantes", isCorrect: true },
      { content: "Fernando Pessoa", isCorrect: false },
      { content: "Machado de Assis", isCorrect: false }
    ]
  },
  {
    description: "Qual compositor é conhecido como o 'pai da sinfonia'?",
    answers: [
      { content: "Wolfgang Amadeus Mozart", isCorrect: false },
      { content: "Joseph Haydn", isCorrect: true },
      { content: "Ludwig van Beethoven", isCorrect: false },
      { content: "Johann Sebastian Bach", isCorrect: false }
    ]
  },
  {
    description: "Qual movimento artístico buscava retratar a luz e o movimento em pinturas?",
    answers: [
      { content: "Cubismo", isCorrect: false },
      { content: "Impressionismo", isCorrect: true },
      { content: "Surrealismo", isCorrect: false },
      { content: "Expressionismo", isCorrect: false }
    ]
  },
  {
    description: "Quem pintou a obra 'Guernica'?",
    answers: [
      { content: "Salvador Dalí", isCorrect: false },
      { content: "Pablo Picasso", isCorrect: true },
      { content: "Claude Monet", isCorrect: false },
      { content: "Vincent van Gogh", isCorrect: false }
    ]
  },
  {
    description: "Qual escritor brasileiro é autor de 'Memórias Póstumas de Brás Cubas'?",
    answers: [
      { content: "Jorge Amado", isCorrect: false },
      { content: "Machado de Assis", isCorrect: true },
      { content: "Carlos Drummond de Andrade", isCorrect: false },
      { content: "Graciliano Ramos", isCorrect: false }
    ]
  },
  {
    description: "Qual estilo musical nasceu nos Estados Unidos e é associado a Elvis Presley?",
    answers: [
      { content: "Jazz", isCorrect: false },
      { content: "Rock and Roll", isCorrect: true },
      { content: "Blues", isCorrect: false },
      { content: "Country", isCorrect: false }
    ]
  },
  {
    description: "Quem é considerado o maior dramaturgo da língua inglesa?",
    answers: [
      { content: "Oscar Wilde", isCorrect: false },
      { content: "William Shakespeare", isCorrect: true },
      { content: "George Bernard Shaw", isCorrect: false },
      { content: "Christopher Marlowe", isCorrect: false }
    ]
  },
  {
    description: "Qual movimento cultural francês do século XIX exaltava a emoção e a natureza?",
    answers: [
      { content: "Romantismo", isCorrect: true },
      { content: "Realismo", isCorrect: false },
      { content: "Naturalismo", isCorrect: false },
      { content: "Classicismo", isCorrect: false }
    ]
  },
  {
    description: "Quem compôs a famosa obra 'O Lago dos Cisnes'?",
    answers: [
      { content: "Igor Stravinsky", isCorrect: false },
      { content: "Pyotr Ilyich Tchaikovsky", isCorrect: true },
      { content: "Frédéric Chopin", isCorrect: false },
      { content: "Sergei Rachmaninoff", isCorrect: false }
    ]
  }
];
export const questionsSports: QuestionProtocol[] = [
  {
    description: "Qual país venceu a primeira Copa do Mundo de futebol em 1930?",
    answers: [
      { content: "Brasil", isCorrect: false },
      { content: "Uruguai", isCorrect: true },
      { content: "Argentina", isCorrect: false },
      { content: "Itália", isCorrect: false }
    ]
  },
  {
    description: "Em qual esporte Michael Jordan se destacou?",
    answers: [
      { content: "Beisebol", isCorrect: false },
      { content: "Basquete", isCorrect: true },
      { content: "Futebol Americano", isCorrect: false },
      { content: "Atletismo", isCorrect: false }
    ]
  },
  {
    description: "Qual cidade sediou os Jogos Olímpicos de 2016?",
    answers: [
      { content: "Pequim", isCorrect: false },
      { content: "Rio de Janeiro", isCorrect: true },
      { content: "Londres", isCorrect: false },
      { content: "Tóquio", isCorrect: false }
    ]
  },
  {
    description: "Quem é considerado o 'Pelé do tênis'?",
    answers: [
      { content: "Roger Federer", isCorrect: true },
      { content: "Rafael Nadal", isCorrect: false },
      { content: "Novak Djokovic", isCorrect: false },
      { content: "Pete Sampras", isCorrect: false }
    ]
  },
  {
    description: "Qual país é o berço do judô?",
    answers: [
      { content: "China", isCorrect: false },
      { content: "Japão", isCorrect: true },
      { content: "Coreia do Sul", isCorrect: false },
      { content: "Tailândia", isCorrect: false }
    ]
  },
  {
    description: "Qual atleta ganhou mais medalhas olímpicas na história?",
    answers: [
      { content: "Usain Bolt", isCorrect: false },
      { content: "Michael Phelps", isCorrect: true },
      { content: "Carl Lewis", isCorrect: false },
      { content: "Larisa Latynina", isCorrect: false }
    ]
  },
  {
    description: "Qual é o esporte mais popular da Índia?",
    answers: [
      { content: "Futebol", isCorrect: false },
      { content: "Críquete", isCorrect: true },
      { content: "Hóquei sobre a grama", isCorrect: false },
      { content: "Kabaddi", isCorrect: false }
    ]
  },
  {
    description: "Em qual esporte se usa a 'Tour de France' como competição principal?",
    answers: [
      { content: "Corrida de cavalos", isCorrect: false },
      { content: "Ciclismo", isCorrect: true },
      { content: "Atletismo", isCorrect: false },
      { content: "Automobilismo", isCorrect: false }
    ]
  },
  {
    description: "Qual seleção conquistou o maior número de títulos da Copa do Mundo de futebol?",
    answers: [
      { content: "Alemanha", isCorrect: false },
      { content: "Brasil", isCorrect: true },
      { content: "Itália", isCorrect: false },
      { content: "Argentina", isCorrect: false }
    ]
  },
  {
    description: "Qual esporte é conhecido como 'o esporte das raquetes'?",
    answers: [
      { content: "Tênis", isCorrect: true },
      { content: "Badminton", isCorrect: false },
      { content: "Squash", isCorrect: false },
      { content: "Pingue-pongue", isCorrect: false }
    ]
  }
];
export const questionsCinema: QuestionProtocol[] = [
  {
    description: "Quem dirigiu o filme 'Titanic'?",
    answers: [
      { content: "Steven Spielberg", isCorrect: false },
      { content: "James Cameron", isCorrect: true },
      { content: "Martin Scorsese", isCorrect: false },
      { content: "Ridley Scott", isCorrect: false }
    ]
  },
  {
    description: "Qual filme ganhou o Oscar de Melhor Filme em 1994?",
    answers: [
      { content: "Forrest Gump", isCorrect: true },
      { content: "Pulp Fiction", isCorrect: false },
      { content: "The Shawshank Redemption", isCorrect: false },
      { content: "Braveheart", isCorrect: false }
    ]
  },
  {
    description: "Quem interpretou o personagem 'Coringa' em 'The Dark Knight'?",
    answers: [
      { content: "Joaquin Phoenix", isCorrect: false },
      { content: "Heath Ledger", isCorrect: true },
      { content: "Jack Nicholson", isCorrect: false },
      { content: "Jared Leto", isCorrect: false }
    ]
  },
  {
    description: "Qual é o filme de animação da Pixar sobre brinquedos que ganham vida?",
    answers: [
      { content: "Toy Story", isCorrect: true },
      { content: "Shrek", isCorrect: false },
      { content: "Frozen", isCorrect: false },
      { content: "Madagascar", isCorrect: false }
    ]
  },
  {
    description: "Quem dirigiu 'O Senhor dos Anéis'?",
    answers: [
      { content: "Peter Jackson", isCorrect: true },
      { content: "George Lucas", isCorrect: false },
      { content: "Christopher Nolan", isCorrect: false },
      { content: "Francis Ford Coppola", isCorrect: false }
    ]
  },
  {
    description: "Qual atriz protagonizou 'Bonequinha de Luxo' (Breakfast at Tiffany's)?",
    answers: [
      { content: "Audrey Hepburn", isCorrect: true },
      { content: "Marilyn Monroe", isCorrect: false },
      { content: "Elizabeth Taylor", isCorrect: false },
      { content: "Grace Kelly", isCorrect: false }
    ]
  },
  {
    description: "Qual filme de 1972 é considerado um clássico do cinema de máfia?",
    answers: [
      { content: "Scarface", isCorrect: false },
      { content: "The Godfather", isCorrect: true },
      { content: "Goodfellas", isCorrect: false },
      { content: "Casino", isCorrect: false }
    ]
  },
  {
    description: "Quem dirigiu 'Inception' (A Origem)?",
    answers: [
      { content: "Christopher Nolan", isCorrect: true },
      { content: "Quentin Tarantino", isCorrect: false },
      { content: "David Fincher", isCorrect: false },
      { content: "James Cameron", isCorrect: false }
    ]
  },
  {
    description: "Qual filme da Disney apresenta a música 'Let It Go'?",
    answers: [
      { content: "Frozen", isCorrect: true },
      { content: "Moana", isCorrect: false },
      { content: "Encanto", isCorrect: false },
      { content: "Rapunzel", isCorrect: false }
    ]
  },
  {
    description: "Qual ator interpretou Neo em 'The Matrix'?",
    answers: [
      { content: "Keanu Reeves", isCorrect: true },
      { content: "Tom Cruise", isCorrect: false },
      { content: "Brad Pitt", isCorrect: false },
      { content: "Johnny Depp", isCorrect: false }
    ]
  }
];

export const questionsMythology: QuestionProtocol[] = [
  {
    description: "Na mitologia grega, quem era o deus dos mares?",
    answers: [
      { content: "Zeus", isCorrect: false },
      { content: "Poseidon", isCorrect: true },
      { content: "Hades", isCorrect: false },
      { content: "Apolo", isCorrect: false }
    ]
  },
  {
    description: "Na mitologia nórdica, quem empunhava o martelo Mjölnir?",
    answers: [
      { content: "Odin", isCorrect: false },
      { content: "Thor", isCorrect: true },
      { content: "Loki", isCorrect: false },
      { content: "Freyr", isCorrect: false }
    ]
  },
  {
    description: "Qual criatura mitológica tinha corpo de leão, cabeça humana e asas?",
    answers: [
      { content: "Quimera", isCorrect: false },
      { content: "Esfinge", isCorrect: true },
      { content: "Grifo", isCorrect: false },
      { content: "Hidra", isCorrect: false }
    ]
  },
  {
    description: "Na mitologia egípcia, quem era o deus do submundo?",
    answers: [
      { content: "Rá", isCorrect: false },
      { content: "Osíris", isCorrect: true },
      { content: "Anúbis", isCorrect: false },
      { content: "Hórus", isCorrect: false }
    ]
  },
  {
    description: "Quem era a deusa grega da sabedoria?",
    answers: [
      { content: "Afrodite", isCorrect: false },
      { content: "Atena", isCorrect: true },
      { content: "Hera", isCorrect: false },
      { content: "Ártemis", isCorrect: false }
    ]
  },
  {
    description: "Na mitologia romana, Júpiter correspondia a qual deus grego?",
    answers: [
      { content: "Zeus", isCorrect: true },
      { content: "Poseidon", isCorrect: false },
      { content: "Hades", isCorrect: false },
      { content: "Hermes", isCorrect: false }
    ]
  },
  {
    description: "Qual herói grego realizou os Doze Trabalhos?",
    answers: [
      { content: "Aquiles", isCorrect: false },
      { content: "Hércules", isCorrect: true },
      { content: "Perseu", isCorrect: false },
      { content: "Teseu", isCorrect: false }
    ]
  },
  {
    description: "Na mitologia japonesa, quem é a deusa do sol?",
    answers: [
      { content: "Amaterasu", isCorrect: true },
      { content: "Susanoo", isCorrect: false },
      { content: "Tsukuyomi", isCorrect: false },
      { content: "Izanami", isCorrect: false }
    ]
  },
  {
    description: "Qual criatura mitológica renasce das próprias cinzas?",
    answers: [
      { content: "Dragão", isCorrect: false },
      { content: "Fênix", isCorrect: true },
      { content: "Basilisco", isCorrect: false },
      { content: "Quimera", isCorrect: false }
    ]
  },
  {
    description: "Na mitologia grega, quem era o deus do submundo?",
    answers: [
      { content: "Hades", isCorrect: true },
      { content: "Zeus", isCorrect: false },
      { content: "Poseidon", isCorrect: false },
      { content: "Dionísio", isCorrect: false }
    ]
  }
];

export const questionsAstronomy: QuestionProtocol[] = [
  {
    description: "Qual é o maior planeta do Sistema Solar?",
    answers: [
      { content: "Terra", isCorrect: false },
      { content: "Júpiter", isCorrect: true },
      { content: "Saturno", isCorrect: false },
      { content: "Netuno", isCorrect: false }
    ]
  },
  {
    description: "Qual estrela está mais próxima da Terra?",
    answers: [
      { content: "Alpha Centauri", isCorrect: false },
      { content: "Sol", isCorrect: true },
      { content: "Betelgeuse", isCorrect: false },
      { content: "Sirius", isCorrect: false }
    ]
  },
  {
    description: "Qual planeta é conhecido como 'Planeta Vermelho'?",
    answers: [
      { content: "Marte", isCorrect: true },
      { content: "Vênus", isCorrect: false },
      { content: "Mercúrio", isCorrect: false },
      { content: "Saturno", isCorrect: false }
    ]
  },
  {
    description: "Qual é a galáxia onde está localizado o Sistema Solar?",
    answers: [
      { content: "Via Láctea", isCorrect: true },
      { content: "Andrômeda", isCorrect: false },
      { content: "Sombrero", isCorrect: false },
      { content: "Triângulo", isCorrect: false }
    ]
  },
  {
    description: "Qual planeta possui os anéis mais visíveis?",
    answers: [
      { content: "Saturno", isCorrect: true },
      { content: "Urano", isCorrect: false },
      { content: "Netuno", isCorrect: false },
      { content: "Júpiter", isCorrect: false }
    ]
  },
  {
    description: "Qual é o nome do primeiro homem a pisar na Lua?",
    answers: [
      { content: "Buzz Aldrin", isCorrect: false },
      { content: "Neil Armstrong", isCorrect: true },
      { content: "Yuri Gagarin", isCorrect: false },
      { content: "Michael Collins", isCorrect: false }
    ]
  },
  {
    description: "Qual planeta é conhecido por sua intensa atmosfera de dióxido de carbono?",
    answers: [
      { content: "Vênus", isCorrect: true },
      { content: "Marte", isCorrect: false },
      { content: "Mercúrio", isCorrect: false },
      { content: "Terra", isCorrect: false }
    ]
  },
  {
    description: "Qual é o nome do fenômeno em que a Lua cobre o Sol?",
    answers: [
      { content: "Eclipse solar", isCorrect: true },
      { content: "Eclipse lunar", isCorrect: false },
      { content: "Solstício", isCorrect: false },
      { content: "Equinócio", isCorrect: false }
    ]
  },
  {
    description: "Qual planeta tem o dia mais curto do Sistema Solar?",
    answers: [
      { content: "Júpiter", isCorrect: true },
      { content: "Terra", isCorrect: false },
      { content: "Marte", isCorrect: false },
      { content: "Saturno", isCorrect: false }
    ]
  },
  {
    description: "Qual telescópio espacial foi lançado em 1990 e revolucionou a astronomia?",
    answers: [
      { content: "Hubble", isCorrect: true },
      { content: "James Webb", isCorrect: false },
      { content: "Kepler", isCorrect: false },
      { content: "Spitzer", isCorrect: false }
    ]
  }
];

export const questionsLiterature: QuestionProtocol[] = [
  {
    description: "Quem escreveu 'Os Lusíadas'?",
    answers: [
      { content: "Camões", isCorrect: true },
      { content: "Fernando Pessoa", isCorrect: false },
      { content: "Machado de Assis", isCorrect: false },
      { content: "José Saramago", isCorrect: false }
    ]
  },
  {
    description: "Qual autor escreveu 'Dom Casmurro'?",
    answers: [
      { content: "Machado de Assis", isCorrect: true },
      { content: "José de Alencar", isCorrect: false },
      { content: "Graciliano Ramos", isCorrect: false },
      { content: "Jorge Amado", isCorrect: false }
    ]
  },
  {
    description: "Quem é o autor de 'Romeu e Julieta'?",
    answers: [
      { content: "William Shakespeare", isCorrect: true },
      { content: "Charles Dickens", isCorrect: false },
      { content: "Victor Hugo", isCorrect: false },
      { content: "Goethe", isCorrect: false }
    ]
  },
  {
    description: "Qual movimento literário brasileiro é associado a Manuel Bandeira?",
    answers: [
      { content: "Modernismo", isCorrect: true },
      { content: "Romantismo", isCorrect: false },
      { content: "Realismo", isCorrect: false },
      { content: "Naturalismo", isCorrect: false }
    ]
  },
  {
    description: "Quem escreveu 'A Divina Comédia'?",
    answers: [
      { content: "Dante Alighieri", isCorrect: true },
      { content: "Homero", isCorrect: false },
      { content: "Virgílio", isCorrect: false },
      { content: "Boccaccio", isCorrect: false }
    ]
  },
  {
    description: "Qual obra de George Orwell retrata um regime totalitário?",
    answers: [
      { content: "1984", isCorrect: true },
      { content: "A Revolução dos Bichos", isCorrect: false },
      { content: "O Senhor das Moscas", isCorrect: false },
      { content: "Admirável Mundo Novo", isCorrect: false }
    ]
  },
  {
    description: "Quem é considerado o maior poeta épico da Grécia Antiga?",
    answers: [
      { content: "Homero", isCorrect: true },
      { content: "Sófocles", isCorrect: false },
      { content: "Eurípedes", isCorrect: false },
      { content: "Aristófanes", isCorrect: false }
    ]
  },
  {
    description: "Qual escritor francês escreveu 'Os Miseráveis'?",
    answers: [
      { content: "Victor Hugo", isCorrect: true },
      { content: "Balzac", isCorrect: false },
      { content: "Flaubert", isCorrect: false },
      { content: "Zola", isCorrect: false }
    ]
  },
  {
    description: "Quem é o autor de 'Grande Sertão: Veredas'?",
    answers: [
      { content: "Guimarães Rosa", isCorrect: true },
      { content: "Jorge Amado", isCorrect: false },
      { content: "Carlos Drummond de Andrade", isCorrect: false },
      { content: "Clarice Lispector", isCorrect: false }
    ]
  },
  {
    description: "Qual obra de Cervantes é considerada um marco da literatura espanhola?",
    answers: [
      { content: "Dom Quixote", isCorrect: true },
      { content: "La Celestina", isCorrect: false },
      { content: "Cien Años de Soledad", isCorrect: false },
      { content: "El Lazarillo de Tormes", isCorrect: false }
    ]
  }
];
