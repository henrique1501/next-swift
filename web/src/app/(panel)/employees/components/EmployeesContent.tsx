'use client'

import { Ban } from 'lucide-react'
import { Checkbox } from '../../components/Checkbox'
import { QuantitySelect } from '../../components/QuantitySelect'
import { Tooltip } from '../../components/Tooltip'
import { Td } from '../../components/table/Td'
import { Th } from '../../components/table/Th'
import { useState } from 'react'

export function EmployeesContent() {
  const [isShowingDismissBtn, setIsShowingDismissBtn] = useState(false)

  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="w-fit max-[414px]:ml-4 max-[414px]:mr-auto lg:ml-auto">
        <QuantitySelect />
      </div>

      <div className="scrollbar max-[414px]:max-w-[400px] max-[414px]:overflow-scroll max-[414px]:px-4">
        <table className="w-[1024px] table-fixed border-spacing-1">
          <thead>
            <tr className="border-b border-gray-200">
              <th></th>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>CNPJ</Th>
              <Th className="pl-6">DDD</Th>
              <Th>Número</Th>
              <Th>Adicionado</Th>
              <Th>Atualizado</Th>
              <th></th>
            </tr>
          </thead>

          <tbody className="before-tbody">
            <tr className="h-14 border-b border-gray-200">
              <td>
                <div className="flex h-full items-center justify-center">
                  <Checkbox
                    checked={isShowingDismissBtn}
                    onChange={setIsShowingDismissBtn}
                  />
                </div>
              </td>
              <Td>
                <Tooltip content="Jhon doe" side="top">
                  <span className="block w-24 truncate">Jhon doe</span>
                </Tooltip>
              </Td>
              <Td>
                <Tooltip content="jhondoe@gmail.com" side="top">
                  <span className="block w-24 truncate">jhondoe@gmail.com</span>
                </Tooltip>
              </Td>
              <Td>
                <Tooltip content="60.424.941/0001-84" side="top">
                  <span className="block w-24 truncate">
                    60.424.941/0001-84
                  </span>
                </Tooltip>
              </Td>
              <Td className="pl-6">82</Td>
              <Td>9 99990906</Td>
              <Td>10/06/2023</Td>
              <Td>16/06/2023</Td>
              <td className="text-center">
                {isShowingDismissBtn && (
                  <button className="rounded-full p-2 transition-all hover:bg-gray-200">
                    <Ban className="h-5 w-5 stroke-purple-700" />
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
