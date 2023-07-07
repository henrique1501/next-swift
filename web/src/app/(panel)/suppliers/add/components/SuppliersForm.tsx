'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import * as Form from '@radix-ui/react-form'

export function SuppliersForm() {
  return (
    <Form.Root className="mt-10 flex w-full flex-col gap-16">
      <div>
        <h2 className="text-xl font-medium text-zinc-900">
          Dados do fornecedor
        </h2>

        <div className="mt-6 flex flex-col gap-4">
          <Input name="name" label="Nome" placeholder="Jhon doe" />

          <Input name="email" label="Email" placeholder="jhondoe@gmail.com" />

          <div className="flex items-center gap-6">
            <Input name="cnpj" label="CNPJ" placeholder="000.000.00-00" />
            <Input name="ddd" label="DDD" placeholder="00" type="number" />
            <Input
              name="phone"
              label="Celular/Telefone"
              placeholder="000000000"
              type="number"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-medium text-zinc-900">
          Endereço do fornecedor
        </h2>

        <div className="mt-6 flex flex-col gap-4">
          <Input name="street" label="Rua" placeholder="brasil" />

          <div className="flex items-center gap-6">
            <Input
              name="number"
              label="Número"
              placeholder="00"
              type="number"
            />
            <Input name="cep" label="CEP" placeholder="00000-00" />
            <Input name="uf" label="UF" placeholder="SP" />
          </div>
        </div>
      </div>

      <div className="ml-auto w-[120px]">
        <Button>Adicionar</Button>
      </div>
    </Form.Root>
  )
}
