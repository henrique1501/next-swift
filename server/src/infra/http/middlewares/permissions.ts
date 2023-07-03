import { AppError } from '@app/errors/AppError'
import { prisma } from '@infra/database/prisma'
import { NextFunction, Request, Response } from 'express'

export function is(roles: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.employee

    const employee = await prisma.employee.findFirst({
      where: {
        id,
      },
      include: {
        roles: true,
      },
    })

    const hasRolesValid = employee?.roles
      .map((role) => role.name)
      .some((role) => roles.includes(role))

    if (!hasRolesValid) {
      throw new AppError('Unauthorized action!', 401)
    }

    next()
  }
}
