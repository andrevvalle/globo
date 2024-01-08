import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigService } from '@nestjs/config'
import { Env } from 'src/env'
import { z } from 'zod'

const tokenSchema = z.object({
  sub: z.string().uuid(),
})

export type TokenPayload = z.infer<typeof tokenSchema>

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(ConfigService: ConfigService<Env, true>) {
    const publicKey = ConfigService.get('JWT_PUBLIC_KEY', { infer: true })

    super({
      secretOrKey: Buffer.from(publicKey as string, 'base64'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      algorithms: ['RS256'],
    })
  }

  async validate(payload: TokenPayload) {
    return tokenSchema.parse(payload)
  }
}
