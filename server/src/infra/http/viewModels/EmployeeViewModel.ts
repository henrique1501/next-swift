import { Employee } from '@app/entities/Employee'

export class EmployeeViewModel {
  static toHttp(employee: Employee, roles: string[]) {
    return {
      id: employee.id,
      name: employee.name,
      email: employee.email.value,
      avatar: employee.avatar,
      role: roles[0],
    }
  }
}
