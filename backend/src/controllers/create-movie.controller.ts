import { z } from 'zod'

import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { TokenPayload } from 'src/auth/jwt.strategy'

import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'

const createMovieSchema = z.object({
  title: z.string(),
  year: z.number(),
  director: z.string(),
  genre: z.string(),
  synopsis: z.string(),
  actors: z.array(z.string()),
  image: z.string(),
})

type CreateMovieBodySchema = z.infer<typeof createMovieSchema>

@Controller('/create-movie')
@UseGuards(JwtAuthGuard)
export class CreateMovieController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async create(
    @Body(new ZodValidationPipe(createMovieSchema)) body: CreateMovieBodySchema,
    @CurrentUser() user: TokenPayload,
  ) {
    const { title, year, director, genre, synopsis, actors, image } = body
    const { sub: userId } = user

    const userFind = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!userFind && userFind.role !== 'ADMIN') {
      throw new UnauthorizedException('You are not authorized')
    }

    await this.prisma.movie.create({
      data: {
        authorId: userId,
        title,
        year,
        director,
        genre,
        synopsis,
        actors,
        image,
      },
    })
  }
}
