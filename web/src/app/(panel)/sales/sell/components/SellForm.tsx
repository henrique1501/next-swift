'use client'

import * as Form from '@radix-ui/react-form'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { ProductsBar } from './ProductsBar'
import { Search } from 'lucide-react'
import { Select } from '../../../components/Select'
import { customersOptions, paymentsOptions } from '../data'

export function SellForm() {
  return (
    <Form.Root className="mt-10 flex w-full flex-col gap-5 overflow-hidden px-4 lg:px-0">
      <div className="w-full">
        <label className="mb-1 block font-medium text-zinc-900">Cliente</label>

        <Select placeholder="Escolha um cliente" options={customersOptions} />
      </div>

      <div>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline">
          <Input
            label="Produto"
            name="product"
            type="text"
            placeholder="Procure um produto"
            prefixIcon={<Search className="h-5 w-5 stroke-gray-300" />}
            className="flex-1"
          />

          <Input
            label="Quantidade"
            name="quantity"
            type="number"
            placeholder="12"
          />
        </div>

        <ProductsBar />
      </div>

      <div className="w-full">
        <label className="mb-1 block font-medium text-zinc-900">
          Método de pagamento
        </label>

        <Select
          placeholder="Selecione um método de pagamento"
          options={paymentsOptions}
        />
      </div>

      <div className="ml-auto w-full lg:w-[120px]">
        <Button>Finalizar</Button>
      </div>
    </Form.Root>
  )
}
