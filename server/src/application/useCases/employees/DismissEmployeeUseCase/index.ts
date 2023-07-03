/* eslint-disable no-useless-constructor */
import { AppError } from '@app/errors/AppError'
import { IEmployeesRepository } from '@app/repositories/IEmployeesRepository'
import { compare } from 'bcryptjs'

interface Request {
  adminId: string
  adminPassword: string
  employeeId: string
}

type Response = void

export class DismissEmployeeUseCase {
  constructor(private employeesRepo: IEmployeesRepository) {}

  async execute({
    adminId,
    adminPassword,
    employeeId,
  }: Request): Promise<Response> {
    if (!adminPassword || !employeeId) {
      throw new AppError(
        'missing data! admin password and employee id must be provided!',
      )
    }

    const admin = await this.employeesRepo.findById(adminId)

    if (!admin) {
      throw new AppError('Admin not found!')
    }

    const passwordMatch = compare(adminPassword, admin.password.value)

    if (!passwordMatch) {
      throw new AppError('Incorrect password!')
    }

    const employee = await this.employeesRepo.findById(employeeId)

    if (!employee) {
      throw new AppError('Employee not found!')
    }

    employee.dismiss()

    await this.employeesRepo.save(employee)
  }
}
