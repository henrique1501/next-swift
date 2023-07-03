import { Employee, Gender } from '@app/entities/Employee'
import { Email } from '@app/entities/Employee/Email'
import { Password } from '@app/entities/Employee/Password'
import { AppError } from '@app/errors/AppError'
import { IMailProvider } from '@app/providers/IMailProvider'
import { IEmployeesRepository } from '@app/repositories/IEmployeesRepository'
import { hash } from 'bcryptjs'
import { randomBytes } from 'node:crypto'
import { resolve } from 'node:path'

interface Request {
  name: string
  email: string
  phone: number
  avatar: string | null
  gender: Gender
  roleId: string
}

type Response = void

export class HireEmployeeUseCase {
  constructor(
    private employeesRepo: IEmployeesRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(data: Request): Promise<Response> {
    const { name, email, phone, avatar, gender, roleId } = data

    const employeeAlreadyExists = await this.employeesRepo.findByEmail(email)

    if (employeeAlreadyExists) {
      throw new AppError('Employee already exists!')
    }

    const password = randomBytes(10).toString('hex')

    const hashedPassword = await hash(password, 8)

    const employee = new Employee({
      name,
      email: new Email(email),
      password: new Password(hashedPassword),
      phone,
      avatar,
      gender,
      roles: null,
    })

    await this.employeesRepo.create(employee, roleId)

    const templatePath = resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'infra',
      'views',
      'emails',
      'hireEmployee.hbs',
    )

    const employeeVariables = {
      name,
      password,
    }

    await this.mailProvider.sendMail({
      to: email,
      subject: 'Contratação',
      variables: employeeVariables,
      path: templatePath,
    })
  }
}
