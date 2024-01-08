// seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const movies = [
    {
      title: 'Interstellar',
      year: 2014,
      director: 'Christopher Nolan',
      genre: 'Sci-Fi',
      synopsis:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      actors: [
        'Matthew McConaughey',
        'Anne Hathaway',
        'Jessica Chastain',
        'Michael Caine',
      ],
      image: 'https://example.com/movie_2.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Lunar Echo',
      year: 2020,
      director: 'Alex Rivera',
      genre: 'Adventure',
      synopsis:
        'Astronauts on a lunar base uncover a mysterious alien artifact, leading to unexpected consequences.',
      actors: ['Idris Elba', 'Naomi Watts', 'Riz Ahmed', 'Sigourney Weaver'],
      image: 'https://example.com/movie_3.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: "Ocean's Secrets",
      year: 2018,
      director: 'Sofia Coppola',
      genre: 'Mystery',
      synopsis:
        'A marine biologist discovers a hidden underwater city with dark secrets.',
      actors: [
        'Kate Winslet',
        'Chadwick Boseman',
        'Emily Blunt',
        'Gary Oldman',
      ],
      image: 'https://example.com/movie_4.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Eternal Skies',
      year: 2022,
      director: 'Jordan Peele',
      genre: 'Sci-Fi',
      synopsis:
        'In a future where the sky has been forgotten, a child dreams of seeing the stars.',
      actors: [
        "Lupita Nyong'o",
        'Daniel Kaluuya',
        'Tessa Thompson',
        'John Boyega',
      ],
      image: 'https://example.com/movie_5.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'The Forgotten Valley',
      year: 2021,
      director: 'Greta Gerwig',
      genre: 'Drama',
      synopsis:
        'A woman returns to her home village, only to find it abandoned and full of mysteries.',
      actors: [
        'Saoirse Ronan',
        'Timothée Chalamet',
        'Florence Pugh',
        'Laura Dern',
      ],
      image: 'https://example.com/movie_6.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Galactic Runaway',
      year: 2019,
      director: 'Denis Villeneuve',
      genre: 'Thriller',
      synopsis:
        'A rogue space pilot becomes entangled in an interstellar conflict.',
      actors: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas', 'Jared Leto'],
      image: 'https://example.com/movie_7.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Timeless City',
      year: 2023,
      director: 'Ava DuVernay',
      genre: 'Fantasy',
      synopsis: 'A time-traveler discovers a city where time stands still.',
      actors: ['Viola Davis', 'Michael B. Jordan', 'Zendaya', 'Morgan Freeman'],
      image: 'https://example.com/movie_8.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Echoes of the Past',
      year: 2017,
      director: 'Wes Anderson',
      genre: 'Historical',
      synopsis:
        'A historian unearths a secret that could change the course of history.',
      actors: [
        'Bill Murray',
        'Tilda Swinton',
        'Edward Norton',
        'Frances McDormand',
      ],
      image: 'https://example.com/movie_9.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Parallel Worlds',
      year: 2024,
      director: 'Patty Jenkins',
      genre: 'Sci-Fi',
      synopsis:
        'A scientist accidentally opens a portal to a parallel universe.',
      actors: ['Gal Gadot', 'Chris Pine', 'Pedro Pascal', 'Robin Wright'],
      image: 'https://example.com/movie_10.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
    {
      title: 'Shadow of the Moon',
      year: 2025,
      director: 'Taika Waititi',
      genre: 'Comedy',
      synopsis:
        'A group of misfits embark on a space mission to the moon, leading to hilarious misadventures.',
      actors: [
        'Chris Hemsworth',
        'Natalie Portman',
        'Tessa Thompson',
        'Mark Ruffalo',
      ],
      image: 'https://example.com/movie_11.jpg',
      authorId: 'bc5dc53e-dd81-4030-9b6f-7f0d2aefc9f7',
    },
  ]

  for (const movie of movies) {
    await prisma.movie.create({ data: movie })
  }
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
