'use client'

import * as Form from '@radix-ui/react-form'
import { Mail } from 'lucide-react'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

export function PasswordRecoveryForm() {
  return (
    <Form.Form>
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Digite seu email"
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
        className="mb-6"
      />

      <Button>Enviar</Button>
    </Form.Form>
  )
}
