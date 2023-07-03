import { RemoveProductImagesUseCase } from '@app/useCases/products/RemoveProductImagesUseCase'
import { PrismaProductImagesRepository } from '@infra/database/prisma/repositories/PrismaProductImagesRepository'
import { Request, Response } from 'express'
import { z } from 'zod'

const paramsSchema = z.object({
  productId: z.string().uuid(),
})

const bodySchema = z.object({
  imagesIds: z.string().array().min(1, 'send one or more images to remove!'),
})

export class RemoveProductImagesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { productId } = paramsSchema.parse(req.params)
    const { imagesIds } = bodySchema.parse(req.body)

    const productImagesRepo = new PrismaProductImagesRepository()
    const removeProductImagesUseCase = new RemoveProductImagesUseCase(
      productImagesRepo,
    )

    await removeProductImagesUseCase.execute({ imagesIds, productId })

    return res.status(204).send()
  }
}
