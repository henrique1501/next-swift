import { Email } from '@app/entities/Employee/Email'
import { Password } from '@app/entities/Employee/Password'
import { EmployeeNotFoundError } from '@app/errors/EmployeeNotFound'
import { IStorageProvider } from '@app/providers/IStorageProvider'
import { IEmployeesRepository } from '@app/repositories/IEmployeesRepository'
import { hash } from 'bcryptjs'

interface Request {
  employeeId: string
  name?: string
  email?: string
  password?: string
  phone?: number
  avatar?: string
}

export class UpdateEmployeeInfoUseCase {
  constructor(
    private employeesRepo: IEmployeesRepository,
    private storageProvider: IStorageProvider,
  ) {}

  async execute({ employeeId, ...data }: Request) {
    const employee = await this.employeesRepo.findById(employeeId)

    if (!employee) {
      throw new EmployeeNotFoundError()
    }

    let hashedPassword = employee.password.value

    if (data.password) {
      hashedPassword = await hash(data.password, 8)
    }

    if (employee.avatar && data.avatar) {
      await this.storageProvider.delete(employee.avatar, 'avatar')

      await this.storageProvider.save(data.avatar, 'avatar')
    }

    employee.name = data.name ?? employee.name
    employee.email = new Email(data.email ?? employee.email.value)
    employee.password = new Password(hashedPassword)
    employee.phone = data.phone ?? employee.phone
    employee.avatar = data.avatar ?? employee.avatar
    employee.update()

    await this.employeesRepo.save(employee)
  }
}
