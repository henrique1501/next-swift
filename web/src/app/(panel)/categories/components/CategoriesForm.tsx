'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import * as Form from '@radix-ui/react-form'

export function CategoriesForm() {
  return (
    <>
      <h2 className="text-2xl font-semibold text-zinc-900">
        Crie uma nova categoria
      </h2>

      <Form.Root className="mt-10">
        <Input
          name="name"
          label="Nome da categoria"
          placeholder="camisetas, sapatos..."
        />

        <div className="ml-auto mt-6 w-[120px]">
          <Button>Criar</Button>
        </div>
      </Form.Root>
    </>
  )
}
