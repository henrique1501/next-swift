'use client'

import { Button } from '@/components/Button'
import * as Form from '@radix-ui/react-form'
import { FormEvent } from 'react'
import { ExcelDropzone } from './ExcelDropzone'

export function ProductForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <Form.Root
      className="mt-10 flex w-full flex-col gap-5"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          className="mb-1 text-sm font-medium text-zinc-900"
          htmlFor="excel-file"
        >
          Arquivo
        </label>
        <ExcelDropzone />
      </div>

      <Button type="submit" className="ml-auto w-[120px]">
        Cadastrar
      </Button>
    </Form.Root>
  )
}
