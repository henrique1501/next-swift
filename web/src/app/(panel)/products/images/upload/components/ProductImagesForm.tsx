'use client'

import { Dropzone } from '@/app/(panel)/components/Dropzone'
import { Select } from '@/app/(panel)/components/Select'
import { Button } from '@/components/Button'
import * as Form from '@radix-ui/react-form'
import { selectOptions } from '../data'

export function ProductImagesForm() {
  return (
    <Form.Root className="flex w-full flex-col gap-5">
      <Select placeholder="Selecione um produto" options={selectOptions} />

      <div>
        <label htmlFor="images" className="text-sm font-medium text-zinc-900">
          Imagens
        </label>
        <Dropzone
          id="images"
          label="Arraste e solte suas imagens aqui"
          onChange={() => console.log()}
        />
      </div>

      <Button type="submit" className="ml-auto w-fit">
        Adicionar imagens
      </Button>
    </Form.Root>
  )
}
