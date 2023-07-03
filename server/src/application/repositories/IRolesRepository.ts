import { Role } from '@app/entities/Role'

export interface IRolesRepository {
  findByName(name: string): Promise<Role | null>
  findByEmployeeId(employeeId: string): Promise<Role[] | null>
  create(role: Role): Promise<void>
}
