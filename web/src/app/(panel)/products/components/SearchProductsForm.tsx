'use client'

import * as Form from '@radix-ui/react-form'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { Datepicker } from './Datepicker'

export function SearchProductsForm() {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  return (
    <Form.Form className="flex w-full flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between md:gap-0 lg:px-0">
      <div className="flex items-center justify-between gap-4 md:justify-normal">
        <Datepicker
          selectedDate={startDate}
          onDateSelected={setStartDate}
          comparedDate={endDate}
          label="Data de Início:"
        />

        <Datepicker
          selectedDate={endDate}
          onDateSelected={setEndDate}
          comparedDate={startDate}
          label="Data de Término:"
        />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <Input
          label="Pesquise por um produto"
          name="search"
          type="search"
          placeholder="Camiseta branca, sapato marron...."
          prefixIcon={<Search className="h-5 w-5 stroke-gray-300" />}
          className="flex-1"
        />

        <Button color="zinc-900">Buscar</Button>
      </div>
    </Form.Form>
  )
}
