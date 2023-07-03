import { DismissEmployeeUseCase } from '@app/useCases/employees/DismissEmployeeUseCase'
import { PrismaEmployeesRepository } from '@infra/database/prisma/repositories/PrismaEmployeesRepository'
import { Request, Response } from 'express'

export class DismissEmployeeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id: adminId } = req.employee
    const { adminPassword, employeeId } = req.body

    const employeesRepo = new PrismaEmployeesRepository()

    const dismissEmployeeUseCase = new DismissEmployeeUseCase(employeesRepo)

    await dismissEmployeeUseCase.execute({
      adminId,
      adminPassword,
      employeeId,
    })

    return res.json({ message: 'Employee Dismissd!' })
  }
}
