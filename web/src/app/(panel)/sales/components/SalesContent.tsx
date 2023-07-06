'use client'

import { useState } from 'react'
import { QuantitySelect } from '../../components/QuantitySelect'
import { Td } from '../../components/table/Td'
import { Th } from '../../components/table/Th'
import { Datepicker } from '../../products/components/Datepicker'
import Image from 'next/image'
import { Tooltip } from '../../components/Tooltip'

export function SalesContent() {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  return (
    <>
      <div className="flex items-end justify-between">
        <div className="flex items-center gap-4">
          <Datepicker
            selectedDate={startDate}
            comparedDate={endDate}
            onDateSelected={setStartDate}
            label="Data de Início:"
          />

          <Datepicker
            selectedDate={endDate}
            comparedDate={startDate}
            onDateSelected={setEndDate}
            label="Data de Término:"
          />
        </div>

        <div>
          <QuantitySelect />
        </div>
      </div>
      <table className="w-[1024px] table-fixed border-spacing-1">
        <thead>
          <tr className="border-b border-gray-200">
            <Th>Total</Th>
            <Th>Quantidade</Th>
            <Th>Método de pagamento</Th>
            <Th>Produto</Th>
            <Th>Cliente</Th>
            <th className="flex items-center gap-2">
              <Tooltip content="Fazer download em excel" side="bottom">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 hover:brightness-90">
                  <Image
                    src="/excel-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                </button>
              </Tooltip>

              <Tooltip content="Fazer download em pdf" side="bottom">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 hover:brightness-90">
                  <Image
                    src="/pdf-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </button>
              </Tooltip>
            </th>
          </tr>
        </thead>

        <tbody className="before-tbody">
          <tr className="h-14 border-b border-gray-200">
            <Td>
              <div className="w-24">
                <span className="block truncate" title="R$ 183,30">
                  R$ 183,30
                </span>
              </div>
            </Td>
            <Td>2</Td>
            <Td>Dinheiro</Td>
            <Td>Camiseta branca</Td>
            <Td>Jhon doe</Td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
