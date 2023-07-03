import { UpdateCustomerInfoUseCase } from '@app/useCases/customers/UpdateCustomerInfoUseCase'
import { PrismaCustomersRepository } from '@infra/database/prisma/repositories/PrismaCustomersRepository'
import { Request, Response } from 'express'
import { z } from 'zod'

const bodySchema = z.object({
  customerId: z.string().nonempty('customer id must be provided'),
  name: z.string().optional(),
  email: z.string().optional(),
  ddd: z.number().optional(),
  phone: z.number().optional(),
  cep: z.string().optional(),
  street: z.string().optional(),
  number: z.number().optional(),
  complement: z.string().optional(),
  uf: z.string().optional(),
})

export class UpdateCustomerInfoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      customerId,
      name,
      email,
      ddd,
      phone,
      cep,
      street,
      number,
      complement,
      uf,
    } = bodySchema.parse(req.body)

    const customersRepo = new PrismaCustomersRepository()
    const updateCustomerInfoUseCase = new UpdateCustomerInfoUseCase(
      customersRepo,
    )

    await updateCustomerInfoUseCase.execute({
      customerId,
      name,
      email,
      ddd,
      phone,
      cep,
      street,
      number,
      complement,
      uf,
    })

    return res
      .status(204)
      .json({ message: 'Customer info updated successfuly!' })
  }
}
