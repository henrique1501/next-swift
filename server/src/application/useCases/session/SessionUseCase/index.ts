/* eslint-disable no-useless-constructor */
import { Token } from '@app/entities/Token'
import { AppError } from '@app/errors/AppError'
import { IDateProvider } from '@app/providers/IDateProvider'
import { IEmployeesRepository } from '@app/repositories/IEmployeesRepository'
import { ITokensRepository } from '@app/repositories/ITokensRepository'
import { env } from '@infra/env'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface Request {
  email: string
  password: string
}

interface Response {
  token: string
  refreshToken: string
  employeeData: {
    id: string
    name: string
    email: string
    avatar: string | null
    phone: number
    createdAt: Date
  }
}

export class SessionUseCase {
  constructor(
    private employeesRepo: IEmployeesRepository,
    private tokensRepo: ITokensRepository,
    private dateProvider: IDateProvider,
  ) {}

  async execute({ email, password }: Request): Promise<Response> {
    if (!email || !password) {
      throw new AppError('Missing one or more credentials!')
    }

    const employee = await this.employeesRepo.findByEmail(email)

    if (!employee) {
      throw new AppError('Email or password incorrect!')
    }

    const passwordMatch = await compare(password, employee.password.value)

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!')
    }

    const token = sign({}, env.JWT_SECRET_KEY, {
      subject: employee.id,
      expiresIn: env.TOKEN_EXPIRES_IN,
    })

    const refreshTokenData = sign({ email }, env.JWT_REFRESH_SECRET_KEY, {
      subject: employee.id,
      expiresIn: env.REFRESH_TOKEN_EXPIRES_IN,
    })

    const REFRESH_TOKEN_EXPIRES_IN = env.REFRESH_TOKEN_EXPIRES_IN.substring(
      2,
      1,
    )

    const refreshTokenExpiresDate = this.dateProvider.add(
      Number(REFRESH_TOKEN_EXPIRES_IN),
      'days',
    )

    const refreshToken = new Token({
      employeeId: employee.id,
      refreshToken: refreshTokenData,
      expiresDate: refreshTokenExpiresDate,
    })

    await this.tokensRepo.create(refreshToken)

    const result: Response = {
      token,
      refreshToken: refreshTokenData,
      employeeData: {
        id: employee.id,
        name: employee.name,
        email: employee.email.value,
        avatar: employee.avatar,
        phone: employee.phone,
        createdAt: employee.createdAt,
      },
    }

    return result
  }
}
