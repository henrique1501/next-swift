import { Employee } from '@app/entities/Employee'

export interface IEmployeesRepository {
  findById(id: string): Promise<Employee | null>
  findByEmail(email: string): Promise<Employee | null>
  create(employee: Employee, roleId: string): Promise<void>
  save(employee: Employee): Promise<void>
  delete(employeeId: string): Promise<void>
}
