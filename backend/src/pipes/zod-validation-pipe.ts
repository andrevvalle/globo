import { PipeTransform, BadRequestException } from '@nestjs/common'
import { ZodSchema, ZodError } from 'zod'
import { fromZodError } from 'zod-validation-error'

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      this.schema.parse(value)
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          message: 'Validation failed',
          statusCode: 400,
          erros: fromZodError(error),
        })
      }

      throw new BadRequestException(error.errors)
    }

    return value
  }
}
