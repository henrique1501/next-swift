'use client'

import * as Form from '@radix-ui/react-form'
import { Select } from './Select'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { ProductsBar } from './ProductsBar'
import { Search } from 'lucide-react'
import { SelectItem } from './SelectItem'

export function SellForm() {
  return (
    <Form.Root className="mt-10 flex w-full flex-col gap-5">
      <div className="w-full">
        <label className="mb-1 block font-medium text-zinc-900">Cliente</label>

        <Select placeholder="Escolha um cliente">
          <SelectItem value="Jhon doe">Jhon doe</SelectItem>
          <SelectItem value="Henrique monteiro">Henrique monteiro</SelectItem>
          <SelectItem value="Diego fernandes">Diego fernandes</SelectItem>
          <SelectItem value="Mayk brito">Mayk brito</SelectItem>
        </Select>
      </div>

      <div>
        <div className="flex items-baseline gap-2">
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

        <Select placeholder="Selecione um método de pagamento">
          <SelectItem value="CASH">Dinheiro</SelectItem>
          <SelectItem value="CREDIT_CARD">Cartão de crédito</SelectItem>
          <SelectItem value="DEBIT_CARD">Cartão de débito</SelectItem>
        </Select>
      </div>

      <div className="ml-auto w-[120px]">
        <Button>Finalizar</Button>
      </div>
    </Form.Root>
  )
}