/* eslint-disable no-undef */
import { AddProductUseCase } from '@app/useCases/products/AddProduct'
import { PrismaProductsRepository } from '@infra/database/prisma/repositories/PrismaProductsRepository'
import { BwipJsBarCodeProvider } from '@infra/providers/barCode/BwipJsBarCodeProvider'
import { S3StorageProvider } from '@infra/providers/storage/S3StorageProvider'
import { Request, Response } from 'express'
import { z } from 'zod'

const bodySchema = z.object({
  name: z.string().min(5, 'name is required!'),
  description: z.string().min(10, 'description is required!'),
  width: z.string().min(2, 'width is required!'),
  height: z.string().min(2, 'height is required!'),
  quantity: z.string().min(2, 'quantity is required!'),
  price: z.string(),
  weight: z.string().min(2, 'weight is required!'),
})

export class AddProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const authorId = req.employee.id
    const { name, description, width, height, quantity, price, weight } =
      bodySchema.parse(req.body)
    const files = req.files as Express.Multer.File[]

    const prismaProductsRepository = new PrismaProductsRepository()
    const storageProvider = new S3StorageProvider()
    const barCodeProvider = new BwipJsBarCodeProvider(storageProvider)
    const addProductUseCase = new AddProductUseCase(
      prismaProductsRepository,
      storageProvider,
      barCodeProvider,
    )

    await addProductUseCase.execute({
      name,
      description,
      width: Number(width),
      height: Number(height),
      quantity: Number(quantity),
      weight: Number(weight),
      price: Number(price),
      authorId,
      images: files.map((file) => file.filename),
    })

    return res.status(201).json({ message: 'product added successfuly!' })
  }
}
