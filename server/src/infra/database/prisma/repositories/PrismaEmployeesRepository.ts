import { Employee } from '@app/entities/Employee'
import { IEmployeesRepository } from '@app/repositories/IEmployeesRepository'
import { prisma } from '..'
import { PrismaEmployeesMapper } from '../mappers/PrismaEmployeesMapper'

export class PrismaEmployeesRepository implements IEmployeesRepository {
  async findById(id: string): Promise<Employee | null> {
    const result = await prisma.employee.findUnique({
      where: {
        id,
      },
      include: {
        roles: true,
      },
    })

    if (!result) {
      return null
    }

    const roles = result.roles.map((role) => role.name)

    return PrismaEmployeesMapper.toDomain(result, roles)
  }

  async findByEmail(email: string): Promise<Employee | null> {
    const result = await prisma.employee.findUnique({
      where: {
        email,
      },
      include: {
        roles: true,
      },
    })

    if (!result) {
      return null
    }

    const roles = result.roles.map((role) => role.name)

    return PrismaEmployeesMapper.toDomain(result, roles)
  }

  async create(employee: Employee, roleId: string): Promise<void> {
    const raw = PrismaEmployeesMapper.toPrisma(employee)

    await prisma.employee.create({
      data: {
        ...raw,
        roles: {
          connect: {
            id: roleId,
          },
        },
      },
    })
  }

  async save(employee: Employee): Promise<void> {
    const raw = PrismaEmployeesMapper.toPrisma(employee)

    await prisma.employee.update({
      data: {
        name: raw.name,
        email: raw.email,
        password: raw.password,
        avatar: raw.avatar,
        phone: raw.phone,
        dismissedAt: employee.dismissedAt,
        updatedAt: employee.updatedAt,
      },
      where: {
        id: raw.id,
      },
    })
  }

  async delete(employeeId: string): Promise<void> {
    await prisma.employee.delete({
      where: {
        id: employeeId,
      },
    })
  }
}
