'use client'

import { Dropzone } from '@/app/(panel)/products/components/Dropzone'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import * as Form from '@radix-ui/react-form'

export function EmployeesForm() {
  return (
    <Form.Root className="mt-10 flex w-full flex-col gap-16">
      <div>
        <h2 className="text-xl font-medium text-zinc-900">Dados pessoais</h2>

        <div className="mt-6 flex flex-col gap-4">
          <Input name="name" label="Nome" placeholder="Jhon doe" />

          <Input name="email" label="Email" placeholder="jhondoe@gmail.com" />

          <div className="flex items-center gap-6">
            <Input name="ddd" label="DDD" placeholder="00" type="number" />
            <Input
              name="phone"
              label="Celular/Telefone"
              placeholder="000000000"
              type="number"
            />
          </div>

          <div>
            <label>Foto de perfil</label>

            <Dropzone label="Arraste e solte uma imagem aqui" />
          </div>
        </div>
      </div>

      <div className="ml-auto w-[120px]">
        <Button>Adicionar</Button>
      </div>
    </Form.Root>
  )
}