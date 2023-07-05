'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import * as Form from '@radix-ui/react-form'
import { FormEvent } from 'react'
import { Editor } from '../../components/Editor'
import { Dropzone } from '../../components/Dropzone'
import { TagInput } from '../../components/TagInput'

export function ProductForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <Form.Root
      className="mt-10 flex w-full flex-col gap-5"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        label="Título"
        placeholder="Camiseta branca, Sapato preto, etc..."
        name="title"
        value="Camisa de botão branca aberta no meio"
      />

      <div>
        <label className="mb-1 text-sm font-medium text-zinc-900">
          Descrição
        </label>

        <Editor
          content={`
            <h1>Camisa de botão branca aberta no meio</h1>

            <p>Lorem ipsum, silor dolor amet...</p>
        `}
        />
      </div>

      <div className="grid grid-cols-3 gap-5">
        <Input
          type="number"
          label="Largura (cm)"
          placeholder="180"
          name="width"
          value="96"
        />

        <Input
          type="number"
          label="Altura (cm)"
          placeholder="362"
          name="height"
          value="120"
        />

        <Input
          type="number"
          label="Peso (g)"
          placeholder="55"
          name="weight"
          value="23"
        />

        <Input
          type="number"
          label="Preço (R$)"
          placeholder="72,90"
          name="price"
          value="130.99"
        />

        <Input
          type="number"
          label="Quantidade"
          placeholder="55"
          name="quantity"
          value="98"
        />
      </div>

      <div>
        <label className="mb-1 text-sm font-medium text-zinc-900">
          Imagens
        </label>
        <Dropzone />
      </div>

      <TagInput
        value={['camisetas', 'camisas manga longa', 'camisa masculino']}
      />

      <Button type="submit" className="ml-auto w-[120px]">
        Adicionar
      </Button>
    </Form.Root>
  )
}
