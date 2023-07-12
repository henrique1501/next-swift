'use client'

import { Trash2 } from 'lucide-react'
import { Checkbox } from '../../components/Checkbox'
import { Td } from '../../components/table/Td'
import { Th } from '../../components/table/Th'
import { Tooltip } from '../../components/Tooltip'
import { useState } from 'react'

export function CategoriesTable() {
  const [isShowingDeleteBtn, setIsShowingDeleteBtn] = useState(false)

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold text-zinc-900">
        Gerencie todas as categorias
      </h2>

      <div className="scrollbar max-[414px]:overflow-scroll">
        <table className="mt-10 w-[520px] table-fixed border-spacing-1 lg:w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th></th>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Produtos</Th>
              <Th>Criada em</Th>
              <th></th>
            </tr>
          </thead>

          <tbody className="before-tbody">
            <tr className="h-14 border-b border-gray-200">
              <td>
                <div className="flex items-center justify-center">
                  <Checkbox
                    checked={isShowingDeleteBtn}
                    onChange={setIsShowingDeleteBtn}
                  />
                </div>
              </td>
              <Td>
                <Tooltip content="99df9df7f7j545jh45jh4j5hj45hj4h5jh45jh45jh">
                  <span className="block w-28 truncate">
                    99df9df7f7j545jh45jh4j5hj45hj4h5jh45jh45jh
                  </span>
                </Tooltip>
              </Td>
              <Td>Camisas</Td>
              <Td>132</Td>
              <Td>10/06/2023</Td>
              <td>
                {isShowingDeleteBtn && (
                  <button className="rounded-full p-2 transition-all hover:bg-gray-200">
                    <Trash2 className="h-5 w-5 stroke-purple-700" />
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
