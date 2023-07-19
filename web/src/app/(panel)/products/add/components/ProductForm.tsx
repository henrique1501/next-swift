'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import * as Form from '@radix-ui/react-form'
import { useState } from 'react'
import { Editor } from '../../components/Editor'
import { Dropzone } from '../../../components/Dropzone'
import { TagInput } from '../../components/TagInput'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/libs/api'
import cookies from 'js-cookie'

const addProductFormValidationSchema = zod.object({
  name: zod.string(),
  width: zod.string(),
  height: zod.string(),
  weight: zod.string(),
  price: zod.string(),
  quantity: zod.string(),
})

type AddProductFormData = zod.infer<typeof addProductFormValidationSchema>

export function ProductForm() {
  const [description, setDescription] = useState<string | undefined>(undefined)
  const [images, setImages] = useState<File[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const token = cookies.get('token')

  const { register, handleSubmit, reset } = useForm<AddProductFormData>({
    resolver: zodResolver(addProductFormValidationSchema),
  })

  async function handleAddProduct({
    name,
    width,
    height,
    weight,
    price,
    quantity,
  }: AddProductFormData) {
    const formData = new FormData()

    formData.append('name', name)
    formData.append('description', description ?? '')
    formData.append('width', width)
    formData.append('height', height)
    formData.append('weight', weight)
    formData.append('price', price)
    formData.append('quantity', quantity)

    images.map((image) => formData.append('image', image))

    try {
      setIsLoading(true)

      await api.post(
        '/products',
        {
          name: formData.get('name'),
          description: formData.get('description'),
          width: formData.get('width'),
          height: formData.get('height'),
          weight: formData.get('weight'),
          price: formData.get('price'),
          quantity: formData.get('quantity'),
          image: formData.get('image'),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      reset()
      setDescription('')
      setImages([])
      setTags([])
    } catch (error: any) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form.Root
      className="mt-10 flex w-full flex-col gap-5"
      onSubmit={handleSubmit(handleAddProduct)}
    >
      <Input
        type="text"
        label="Nome"
        placeholder="Camiseta branca, Sapato preto, etc..."
        {...register('name')}
      />

      <div>
        <label className="mb-1 text-sm font-medium text-zinc-900">
          Descrição
        </label>

        <Editor onChange={setDescription} />
      </div>

      <div className="grid grid-cols-3 gap-5">
        <Input
          type="number"
          label="Largura (cm)"
          placeholder="180"
          {...register('width')}
        />

        <Input
          type="number"
          label="Altura (cm)"
          placeholder="362"
          {...register('height')}
        />

        <Input
          type="number"
          label="Peso (g)"
          placeholder="55"
          {...register('weight')}
        />

        <Input
          type="number"
          label="Preço (R$)"
          placeholder="72,90"
          {...register('price')}
        />

        <Input
          type="number"
          label="Quantidade"
          placeholder="55"
          {...register('quantity')}
        />
      </div>

      <div>
        <label className="mb-1 text-sm font-medium text-zinc-900">
          Imagens
        </label>

        <Dropzone
          label="Arraste e solte suas imagens aqui"
          onChange={setImages}
        />
      </div>

      <TagInput selectedTags={tags} onChange={setTags} />

      <Button type="submit" className="ml-auto w-[120px]" isLoading={isLoading}>
        Adicionar
      </Button>
    </Form.Root>
  )
}
