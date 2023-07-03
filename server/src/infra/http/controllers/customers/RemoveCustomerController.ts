import { RemoveCustomerUseCase } from '@app/useCases/customers/RemoveCustomerUseCase'
import { PrismaCustomersRepository } from '@infra/database/prisma/repositories/PrismaCustomersRepository'
import { Request, Response } from 'express'
import { z } from 'zod'

const bodySchema = z.object({
  customerId: z.string().min(10, 'Invalid customer id lenght!'),
})

export class RemoveCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { customerId } = bodySchema.parse(req.body)

    const customersRepo = new PrismaCustomersRepository()
    const removeCustomerUseCase = new RemoveCustomerUseCase(customersRepo)

    await removeCustomerUseCase.execute({
      customerId,
    })

    return res.status(204).json({ message: 'Customer removed successfuly!' })
  }
}
