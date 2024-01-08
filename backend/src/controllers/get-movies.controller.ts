import * as z from 'zod'
import { Controller, Get, Query, UsePipes } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
// import { Prisma } from '@prisma/client'

const queryParamSchema = z.object({
  search: z.string().optional(),
})
// page: z
//   .string()
//   .optional()
//   .transform((value: string) => Number(value) || 1),
// limit: z
//   .string()
//   .optional()
//   .transform((value: string) => Number(value) || 10),
// year: z
//   .string()
//   .optional()
//   .transform((value: string) => Number(value)),
// sort: z.string().optional().default('desc'),
// genre: z.string().optional(),
// actor: z.string().optional(),
// director: z.string().optional(),

@Controller('/movies')
export class GetMoviesController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @UsePipes(new ZodValidationPipe(queryParamSchema))
  async getMovies(@Query() query: z.infer<typeof queryParamSchema>) {
    // const { search, page, limit, year, sort, genre, actor, director } = query
    const { search } = query
    let filter = {}

    if (search) {
      filter = {
        ...filter,
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { synopsis: { contains: search, mode: 'insensitive' } },
          { genre: { contains: search, mode: 'insensitive' } },
          { director: { contains: search, mode: 'insensitive' } },
        ],
      }
    }

    // if (genre) {
    //   filter = {
    //     ...filter,
    //     genres: {
    //       some: {
    //         name: genre,
    //       },
    //     },
    //   }
    // }

    // if (year && !isNaN(year)) {
    //   filter = {
    //     ...filter,
    //     year: {
    //       equals: year,
    //     },
    //   }
    // }

    // if (actor) {
    //   filter = {
    //     ...filter,
    //     actors: {
    //       some: {
    //         name: actor,
    //       },
    //     },
    //   }
    // }

    // if (director) {
    //   filter = {
    //     ...filter,
    //     directors: {
    //       some: {
    //         name: director,
    //       },
    //     },
    //   }
    // }

    const movies = await this.prisma.movie.findMany({
      where: filter,
      // take: limit,
      // skip: (page - 1) * limit,
      // orderBy: {
      //   createdAt: sort as Prisma.SortOrder,
      // },
    })

    return {
      movies,
    }
  }
}
