import { Employee } from '@app/entities/Employee'
import { Email } from '@app/entities/Employee/Email'
import { Password } from '@app/entities/Employee/Password'
import { Employee as RawEmployee } from '@prisma/client'

export class PrismaEmployeesMapper {
  static toPrisma(employee: Employee): RawEmployee {
    return {
      id: employee.id,
      name: employee.name,
      email: employee.email.value,
      password: employee.password.value,
      phone: employee.phone,
      avatar: employee.avatar,
      dismissedAt: employee.dismissedAt ?? null,
      createdAt: employee.createdAt,
      updatedAt: employee.updatedAt ?? null,
    }
  }

  static toDomain(employee: RawEmployee, roles: string[]): Employee {
    return new Employee(
      {
        name: employee.name,
        email: new Email(employee.email),
        password: new Password(employee.password),
        phone: employee.phone,
        avatar: employee.avatar ?? null,
        roles,
        dismissedAt: employee.dismissedAt,
        createdAt: employee.createdAt,
        updatedAt: employee.updatedAt,
      },
      employee.id,
    )
  }
}
