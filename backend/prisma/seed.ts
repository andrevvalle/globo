import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const adminUser = await prisma.user.findFirst({
    where: {
      role: 'ADMIN',
    },
  })

  if (!adminUser) {
    await prisma.user.create({
      data: {
        id: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
        email: 'admin@root.com',
        password:
          '$2a$10$j6dfCes0QvLJ.ubpf.X8Uefd32C3gLsCFawPo5LV8UdCtNwWCxU.u',
        name: 'Admin',
        role: 'ADMIN',
      },
    })
  }

  const movies = [
    {
      title: 'Patas e Efeitos',
      year: 2024,
      director: 'Charlie Barker',
      genre: 'Comédia',
      synopsis:
        'Um poodle esperto usa seu charme e inteligência para resolver o mistério dos ossos desaparecidos no bairro.',
      actors: ['Buddy Patas', 'Max Focinho', 'Lucy Cauda', 'Daisy Latido'],
      image: '/1.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'O Grande Caper Poodle',
      year: 2025,
      director: 'Max Busca',
      genre: 'Comédia',
      synopsis:
        'Uma equipe de elite de poodles fofos vai em uma missão secreta para resgatar um cão de exposição de alto perfil.',
      actors: [
        'Charlie Fofo',
        'Oscar Latido',
        'Luna Farejadora',
        'Molly Coleira',
      ],
      image: '/2.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Latindo de Rir',
      year: 2024,
      director: 'Lucy Coleira',
      genre: 'Comédia',
      synopsis:
        'Um grupo de cães de diferentes origens se une para uma aventura épica, provando que até os azarões podem ser heróis.',
      actors: ['Rex Errante', 'Sammy Uivador', 'Bella Busca', 'Duque Patas'],
      image: '/3.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Abanadores de Cauda',
      year: 2025,
      director: 'Oscar Patas',
      genre: 'Comédia',
      synopsis:
        'Em uma pequena cidade, um grupo de cães se une para salvar seu parque de ser transformado em um shopping center.',
      actors: ['Maxie Abana', 'Rocky Focinho', 'Coco Osso', 'Buddy Coleira'],
      image: '/4.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Diários do Dachshund',
      year: 2024,
      director: 'Daisy Farejadora',
      genre: 'Comédia',
      synopsis:
        'Um dachshund travesso escreve um diário sobre as aventuras e desventuras diárias de sua vida com sua família excêntrica.',
      actors: [
        'Frankie Pelo',
        'Baxter Cauda',
        'Sortudo Patas',
        'Daisy Focinho',
      ],
      image: '/5.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Diários do Dachshund',
      year: 2024,
      director: 'Daisy Farejadora',
      genre: 'Comédia',
      synopsis:
        'Um dachshund travesso escreve um diário sobre as aventuras e desventuras diárias de sua vida com sua família excêntrica.',
      actors: [
        'Frankie Pelo',
        'Baxter Cauda',
        'Sortudo Patas',
        'Daisy Focinho',
      ],
      image: '/6.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Aventuras Hilariantes',
      year: 2024,
      director: 'Buddy Latido',
      genre: 'Comédia',
      synopsis:
        'Junte-se a uma jornada hilária de um grupo de cães que partem em uma viagem para participar do maior show de cães já visto.',
      actors: ['Buddy Latido', 'Sadie Abana', 'Duque Farejador', 'Lucy Latido'],
      image: '/7.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Estrela Canina',
      year: 2025,
      director: 'Molly Osso',
      genre: 'Comédia',
      synopsis:
        'Um cão comum encontra o estrelato no mundo competitivo dos shows de canto canino.',
      actors: ['Molly Fofo', 'Maxie Uivo', 'Rocky Busca', 'Coco Cauda'],
      image: '/8.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Crônicas de Schnauzer',
      year: 2024,
      director: 'Sammy Focinho',
      genre: 'Comédia',
      synopsis:
        'Siga a vida de um Schnauzer sábio enquanto ele conta suas aventuras a uma nova ninhada de filhotes.',
      actors: ['Sammy Focinho', 'Bella Patas', 'Duque Latido', 'Frankie Abana'],
      image: '/9.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Travessuras Caninas',
      year: 2025,
      director: 'Luna Coleira',
      genre: 'Comédia',
      synopsis:
        'Uma série de eventos cômicos se desenrola quando um grupo travesso de cães planeja um grande assalto para roubar os petiscos mais saborosos do bairro.',
      actors: [
        'Rex Errante',
        'Max Farejador',
        'Baxter Uivador',
        'Sortudo Osso',
      ],
      image: '/10.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'A Missão do Corgi Espacial',
      year: 2025,
      director: 'Pedro Patas',
      genre: 'Ficção Científica',
      synopsis:
        'Um corgi astronauta embarca em uma viagem espacial épica para salvar seu planeta natal de uma ameaça intergaláctica.',
      actors: [
        'Rex Astronauta',
        'Luna Estelar',
        'Buddy Cometa',
        'Bella Galáxia',
      ],
      image: '/11.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'O Fantasma do Labrador',
      year: 2025,
      director: 'Ana Latido',
      genre: 'Terror',
      synopsis:
        'A história arrepiante de um labrador que assombra uma antiga mansão.',
      actors: [
        'Shadow Assombrado',
        'Max Medroso',
        'Lucky Espírito',
        'Daisy Mística',
      ],
      image: '/12.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'As Aventuras Subaquáticas do Buldogue',
      year: 2025,
      director: 'Carlos Rabo',
      genre: 'Aventura',
      synopsis:
        'Um buldogue intrépido embarca em uma aventura subaquática para desvendar um mistério no fundo do mar.',
      actors: [
        'Baxter Oceano',
        'Charlie Corais',
        'Stella Profundezas',
        'Duke Náufrago',
      ],
      image: '/13.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Mistério no Parque Canino',
      year: 2025,
      director: 'Julia Pelo',
      genre: 'Suspense',
      synopsis:
        'Um detetive canino e sua equipe investigam uma série de eventos misteriosos que acontecem em um parque local.',
      actors: [
        'Max Detetive',
        'Bella Inteligente',
        'Rusty Observador',
        'Lucy Esperta',
      ],
      image: '/14.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'O Resgate do Golden Retriever',
      year: 2025,
      director: 'Rafael Orelha',
      genre: 'Ação',
      synopsis:
        'Uma equipe de resgate se aventura em território perigoso para salvar um Golden Retriever perdido.',
      actors: [
        'Rocky Valente',
        'Maggie Heroína',
        'Duke Ágil',
        'Bella Corajosa',
      ],
      image: '/15.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'A Conspiração dos Chihuahuas',
      year: 2025,
      director: 'Luana Focinho',
      genre: 'Espionagem',
      synopsis:
        'Chihuahuas superinteligentes descobrem uma conspiração e embarcam em uma missão de espionagem para salvar seus donos.',
      actors: ['Tiny Espião', 'Lola Ágil', 'Coco Inteligente', 'Pepe Ágil'],
      image: '/16.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'O Cão que Sabia Demais',
      year: 2025,
      director: 'Roberto Pata',
      genre: 'Comédia',
      synopsis:
        'Um cão superinteligente causa confusões hilárias ao tentar se adaptar à vida normal com sua família humana.',
      actors: [
        'Buddy Gênio',
        'Luna Esperta',
        'Max Confuso',
        'Daisy Aventureira',
      ],
      image: '/17.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Os Vira-Latas Contra-Atacam',
      year: 2025,
      director: 'Sofia Osso',
      genre: 'Ação',
      synopsis:
        'Um grupo de vira-latas corajosos une forças para proteger seu bairro de uma ameaça inesperada.',
      actors: ['Rex Líder', 'Luna Valente', 'Buddy Esperto', 'Bella Protetora'],
      image: '/18.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'A Lenda do Cão Samurai',
      year: 2025,
      director: 'Tiago Cauda',
      genre: 'Histórico',
      synopsis:
        'A saga épica de um cão samurai na antiga era do Japão, lutando pela honra e justiça.',
      actors: ['Kuro Bravo', 'Hana Ágil', 'Taro Forte', 'Yumi Sábia'],
      image: '/19.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Os Schnauzers no Tempo',
      year: 2025,
      director: 'Marcela Farejador',
      genre: 'Ficção Científica',
      synopsis:
        'Uma equipe de Schnauzers viaja no tempo para prevenir uma catástrofe que poderia afetar todos os cães do planeta.',
      actors: [
        'Ziggy Inteligente',
        'Max Veloz',
        'Luna Curiosa',
        'Duke Valente',
      ],
      image: '/20.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
  ]

  const hasMovies = await prisma.movie.findFirst()

  if (!hasMovies) {
    for (const movie of movies) {
      await prisma.movie.create({ data: movie })
    }
  }
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
