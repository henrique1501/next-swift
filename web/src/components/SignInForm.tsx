'use client'

import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Form from '@radix-ui/react-form'
import { KeyRound, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { Button } from './Button'
import { Input } from './Input'
import { PasswordInput } from './PasswordInput'

const signInFormValidationSchema = zod.object({
  email: zod.string(),
  password: zod.string(),
})

type SignInFormData = zod.infer<typeof signInFormValidationSchema>

export function SignInForm() {
  const { register, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormValidationSchema),
  })

  function handleSignIn({ email, password }: SignInFormData) {
    console.log({
      email,
      password,
    })
  }

  return (
    <Form.Form onSubmit={handleSubmit(handleSignIn)}>
      <Input
        label="Email"
        type="email"
        placeholder="Digite seu email"
        {...register('email')}
        errors={[
          {
            match: 'typeMismatch',
            msg: 'Digite um email válido',
          },
          {
            match: 'valueMissing',
            msg: 'Campo obrigatório',
          },
        ]}
        prefixIcon={<Mail className="h-6 w-6 stroke-gray-300" />}
      />

      <PasswordInput
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        {...register('password')}
        error="Campo obrigatório"
        prefixIcon={<KeyRound className="h-6 w-6 stroke-gray-300" />}
        className="mt-6"
      />

      <Link
        href="/password/recovery"
        className="mb-6 ml-auto mt-3 block w-fit text-sm font-medium text-purple-700 hover:underline"
      >
        Esqueceu a senha?
      </Link>

      <Button>Entrar</Button>
    </Form.Form>
  )
}
