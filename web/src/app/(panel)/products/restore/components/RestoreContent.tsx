'use client'

import { Checkbox } from '@/app/(panel)/components/Checkbox'
import { Tooltip } from '@/app/(panel)/components/Tooltip'
import { Td } from '@/app/(panel)/components/table/Td'
import { Th } from '@/app/(panel)/components/table/Th'
import { RotateCcw } from 'lucide-react'
import Image from 'next/image'

export function RestoreContent() {
  return (
    <div className="scrollbar mt-4 max-[414px]:max-w-[400px] max-[414px]:overflow-scroll max-[414px]:px-4">
      <table className="w-[1024px] table-fixed border-spacing-1">
        <thead>
          <tr className="border-b border-gray-200">
            <th></th>
            <Th>Produto</Th>
            <Th>Imagem</Th>
            <Th>Largura</Th>
            <Th>Altura</Th>
            <Th>Peso</Th>
            <Th>Quantidade</Th>
            <Th>Preço</Th>
            <Th>Removido em</Th>
            <th></th>
          </tr>
        </thead>

        <tbody className="before-tbody">
          <tr className="border-b border-gray-200">
            <td className="pl-4">
              <div className="flex items-center justify-center">
                <Checkbox />
              </div>
            </td>
            <Td>
              <Tooltip content="Camiseta branca" side="top">
                <span className="block w-24 truncate">Camiseta branca</span>
              </Tooltip>
            </Td>
            <td>
              <div className="py-2">
                <Image
                  src="/shirt.png"
                  alt=""
                  width={120}
                  height={120}
                  className="h-10 w-10 rounded-md object-cover"
                />
              </div>
            </td>
            <Td>56 cm</Td>
            <Td>95 cm</Td>
            <Td>100 g</Td>
            <Td>35 units</Td>
            <Td>R$ 72,20</Td>
            <Td>12/07/2023</Td>
            <td className="pr-4">
              <div className="flex items-center justify-center">
                <button className="rounded-full p-2 transition-all hover:bg-gray-200">
                  <RotateCcw className="h-5 w-5 stroke-purple-700" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
