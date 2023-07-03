import { UpdateEmployeeInfoUseCase } from '@app/useCases/employees/UpdateEmployeeInfoUseCase'
import { PrismaEmployeesRepository } from '@infra/database/prisma/repositories/PrismaEmployeesRepository'
import { S3StorageProvider } from '@infra/providers/storage/S3StorageProvider'
import { Request, Response } from 'express'

export class UpdateEmployeeInfoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id: employeeId } = req.employee
    const { name, email, password, phone } = req.body
    const avatar = req.file?.filename

    const employeesRepo = new PrismaEmployeesRepository()
    const storageProvider = new S3StorageProvider()
    const updateEmployeeInfoUseCase = new UpdateEmployeeInfoUseCase(
      employeesRepo,
      storageProvider,
    )

    await updateEmployeeInfoUseCase.execute({
      employeeId,
      name,
      email,
      password,
      phone,
      avatar,
    })

    return res
      .status(204)
      .json({ message: 'Employee info updated successfuly!' })
  }
}
