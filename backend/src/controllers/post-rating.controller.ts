import { z } from 'zod'
import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { TokenPayload } from 'src/auth/jwt.strategy'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

const ratingParamSchema = z.object({
  movieId: z.string(),
  value: z.number().min(0).max(4),
})

type CreateRatingBodySchema = z.infer<typeof ratingParamSchema>

@Controller('/vote')
@UseGuards(JwtAuthGuard)
export class PostRatingController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async postRating(
    @Body(new ZodValidationPipe(ratingParamSchema))
    body: CreateRatingBodySchema,
    @CurrentUser() user: TokenPayload,
  ) {
    const { movieId, value } = body
    const { sub: userId } = user

    const userFind = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!userFind) {
      throw new UnauthorizedException('User not found')
    }

    if (userFind.role === 'ADMIN') {
      throw new UnauthorizedException('Admin users are not authorized to vote')
    }

    const existingRating = await this.prisma.rating.findFirst({
      where: {
        movieId,
        userId: userFind.id,
      },
    })

    if (existingRating) {
      throw new UnauthorizedException('User has already voted for this movie')
    }

    const rating = await this.prisma.rating.create({
      data: {
        value,
        movieId,
        userId: userFind.id,
      },
    })

    return {
      message: 'Rating registered successfully',
      rating,
    }
  }
}
