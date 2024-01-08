import { Module, Post } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma/prisma.service'
import { AuthModule } from './auth/auth.module'

import { CreateAccountController } from './controllers/create-account.controller'
import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateMovieController } from './controllers/create-movie.controller'
import { GetMoviesController } from './controllers/get-movies.controller'
import { PostRatingController } from './controllers/post-rating.controller'

import { envSchema } from './env'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateMovieController,
    GetMoviesController,
    PostRatingController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
