'use client'

import { Dropzone } from '@/app/(panel)/components/Dropzone'
import { Select } from '@/app/(panel)/components/Select'
import { SelectItem } from '@/app/(panel)/components/Select/SelectItem'
import { Button } from '@/components/Button'
import * as Form from '@radix-ui/react-form'

export function ProductImagesForm() {
  return (
    <Form.Root className="flex w-full flex-col gap-5">
      <Select placeholder="Selecione um produto">
        <SelectItem value="26526352635">Camiseta preta</SelectItem>
        <SelectItem value="476763476346">Camiseta branca</SelectItem>
        <SelectItem value="fdjh45h45hg45">Camiseta azul</SelectItem>
      </Select>

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
