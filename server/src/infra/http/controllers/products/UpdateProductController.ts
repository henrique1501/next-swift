import { UpdateProductUseCase } from '@app/useCases/products/UpdateProductUseCase'
import { PrismaProductsRepository } from '@infra/database/prisma/repositories/PrismaProductsRepository'
import { Request, Response } from 'express'
import { z } from 'zod'

const paramsSchema = z.object({
  productId: z.string().uuid(),
})

const bodySchema = z.object({
  name: z.string().min(3, 'name must have 3 characters or more!'),
  description: z
    .string()
    .min(3, 'description must have 10 characters or more!'),
  width: z.number(),
  height: z.number(),
  quantity: z.number(),
  price: z.number(),
  weight: z.number(),
})

export class UpdateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { productId } = paramsSchema.parse(req.params)
    const { name, description, width, height, quantity, price, weight } =
      bodySchema.parse(req.body)

    const productsRepo = new PrismaProductsRepository()
    const updateProductUseCase = new UpdateProductUseCase(productsRepo)

    await updateProductUseCase.execute({
      productId,
      name,
      description,
      width,
      height,
      quantity,
      price,
      weight,
    })

    return res.status(204).send()
  }
}
