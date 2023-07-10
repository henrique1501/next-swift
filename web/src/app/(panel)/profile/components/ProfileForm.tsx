'use client'

import { Input } from '@/components/Input'
import * as Form from '@radix-ui/react-form'
import { Dropzone } from '../../components/Dropzone'
import { Button } from '@/components/Button'
import { UserPlaceholder } from '../../components/UserPlaceholder'

export function ProfileForm() {
  return (
    <Form.Root className="mt-10 flex w-full flex-col gap-4 lg:gap-16">
      <div>
        <h2 className="text-xl font-medium text-zinc-900">Dados pessoais</h2>

        <div className="mt-6 flex flex-col gap-4">
          <Input name="name" label="Nome" placeholder="Jhon doe" />

          <Input name="email" label="Email" placeholder="jhondoe@gmail.com" />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <Input name="ddd" label="DDD" placeholder="00" type="number" />

            <Input
              name="phone"
              label="Celular/Telefone"
              placeholder="0 00000000"
              type="number"
            />
          </div>

          <div>
            <label htmlFor="profile">Foto de perfil</label>

            <div className="mt-2 flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <UserPlaceholder size="lg" />

              <div className="flex-1">
                <Dropzone
                  label="Arraste e solte uma imagem aqui"
                  id="profile"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="ml-auto w-[120px]">
          <Button>Adicionar</Button>
        </div>
      </div>
    </Form.Root>
  )
}
