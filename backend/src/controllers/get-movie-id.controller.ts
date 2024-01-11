import {
  Controller,
  Get,
  Param,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { validate as uuidValidate } from 'uuid'

function isValidUUID(uuid: string): boolean {
  return uuidValidate(uuid)
}

@Controller('movies')
export class GetMovieIdController {
  constructor(private prisma: PrismaService) {}

  @Get(':id')
  async getMovieById(@Param('id') idFind: string) {
    if (!isValidUUID(idFind)) {
      throw new NotFoundException('Invalid UUID format')
    }

    const movie = await this.prisma.movie.findUnique({
      where: {
        id: idFind,
      },
    })

    console.log(idFind, movie)

    if (!movie) {
      throw new NotFoundException('Movie not found')
    }

    return {
      statusCode: HttpStatus.OK,
      data: movie,
    }
  }
}
