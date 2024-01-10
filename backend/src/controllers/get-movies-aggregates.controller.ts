import { Controller, Get } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Controller('/movie-aggregates')
export class MovieAggregatesController {
  constructor(private prisma: PrismaService) {}

  @Get('/directors')
  async getDirectorAggregates() {
    return this.prisma.movie.groupBy({
      by: ['director'],
      _count: {
        director: true,
      },
    })
  }

  @Get('/genres')
  async getGenreAggregates() {
    return this.prisma.movie.groupBy({
      by: ['genre'],
      _count: {
        genre: true,
      },
    })
  }
}
