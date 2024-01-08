import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { TokenPayload } from './jwt.strategy'

export const CurrentUser = createParamDecorator(
  (_: never, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    return request.user as TokenPayload
  },
)
