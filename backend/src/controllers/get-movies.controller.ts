import * as z from 'zod'
import { Controller, Get, Query, UsePipes } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'

const queryParamSchema = z.object({
  search: z.string().optional(),
  page: z
    .string()
    .optional()
    .default('1')
    .transform(Number)
    .pipe(z.number().min(1)),
})

@Controller('/movies')
export class GetMoviesController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @UsePipes(new ZodValidationPipe(queryParamSchema))
  async getMovies(@Query() query: z.infer<typeof queryParamSchema>) {
    const perPage = 9
    const { search, page } = query
    let filter = {}

    if (search) {
      filter = {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { synopsis: { contains: search, mode: 'insensitive' } },
          { genre: { contains: search, mode: 'insensitive' } },
          { director: { contains: search, mode: 'insensitive' } },
        ],
      }
    }

    const [movies, totalItems] = await Promise.all([
      this.prisma.movie.findMany({
        where: filter,
        take: perPage,
        skip: (page - 1) * perPage,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.movie.count({ where: filter }),
    ])

    const createLink = (page) =>
      `/?${search ? `search=${search}&` : ''}page=${page}`

    return {
      totalItems,
      size: movies.length,
      itemsPerPage: perPage,
      currentPage: page,
      totalPages: Math.ceil(totalItems / perPage),
      data: movies,
      links: {
        first: createLink(1),
        previous: page > 1 ? createLink(page - 1) : null,
        next:
          page < Math.ceil(totalItems / perPage) ? createLink(page + 1) : null,
        last: createLink(Math.ceil(totalItems / perPage)),
      },
    }
  }
}
