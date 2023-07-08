'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import * as Form from '@radix-ui/react-form'

export function CustomersForm() {
  return (
    <Form.Root className="mt-10 flex w-full flex-col gap-4 lg:gap-16">
      <div>
        <h2 className="text-xl font-medium text-zinc-900">Dados pessoais</h2>

        <div className="mt-6 flex flex-col gap-4">
          <Input
            name="name"
            label="Nome"
            placeholder="Jhon doe"
            value="Jhon doe"
          />

          <Input
            name="email"
            label="Email"
            placeholder="jhondoe@gmail.com"
            value="jhondoe@gmail.com"
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <Input
              name="cpf"
              label="CPF"
              placeholder="000.000.00-00"
              value="134.607.274-09"
            />

            <Input
              name="ddd"
              label="DDD"
              placeholder="00"
              type="number"
              value="82"
            />

            <Input
              name="phone"
              label="Celular/Telefone"
              placeholder="000000000"
              type="number"
              value="999999999"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-medium text-zinc-900">
          Endereço do cliente
        </h2>

        <div className="mt-6 flex flex-col gap-4">
          <Input
            name="street"
            label="Rua"
            placeholder="brasil"
            value="Arapiraca 2"
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <Input
              name="number"
              label="Número"
              placeholder="00"
              type="number"
              value="35"
            />

            <Input
              name="cep"
              label="CEP"
              placeholder="00000-00"
              value="57305-030"
            />

            <Input name="uf" label="UF" placeholder="SP" value="AL" />
          </div>
        </div>
      </div>

      <div className="ml-auto w-[120px]">
        <Button>Atualizar</Button>
      </div>
    </Form.Root>
  )
}
