'use client'

import * as Form from '@radix-ui/react-form'

import { Button } from '@/components/Button'
import { PasswordInput } from '@/components/PasswordInput'
import { Eye, KeyRound } from 'lucide-react'

export function UpdatePasswordForm() {
  return (
    <Form.Form>
      <PasswordInput
        label="Nova senha"
        name="password"
        type="password"
        placeholder="Digite sua nova senha"
        error="Campo obrigatório"
        prefixIcon={<KeyRound className="h-6 w-6 stroke-gray-300" />}
        sufixIcon={<Eye className="h-6 w-6 stroke-gray-300" />}
        className="mt-6"
      />

      <PasswordInput
        label="Confirmação de senha"
        name="password"
        type="password"
        placeholder="As senhas devem ser iguais"
        error="Campo obrigatório"
        prefixIcon={<KeyRound className="h-6 w-6 stroke-gray-300" />}
        sufixIcon={<Eye className="h-6 w-6 stroke-gray-300" />}
        className="mb-6 mt-6"
      />

      <Button>Redifinir</Button>
    </Form.Form>
  )
}
