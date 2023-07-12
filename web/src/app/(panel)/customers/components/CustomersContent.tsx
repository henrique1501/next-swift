'use client'

import { Trash2 } from 'lucide-react'
import { Checkbox } from '../../components/Checkbox'
import { QuantitySelect } from '../../components/QuantitySelect'
// import { Tooltip } from '../../components/Tooltip'
import { Td } from '../../components/table/Td'
import { Th } from '../../components/table/Th'
import { Pagnination } from '../../components/Pagnination'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export function CustomersContent() {
  const [isShowingDeleteBtn, setIsShowingDeleteBtn] = useState(false)

  const params = useSearchParams()

  const page = params.get('page') ?? '1'
  const currentPage = Number(page)

  return (
    <div className="mt-10 flex flex-col gap-4">
      <div className="w-fit max-[414px]:mr-auto max-[414px]:px-4 lg:ml-auto">
        <QuantitySelect />
      </div>

      <div className="scrollbar max-[414px]:max-w-[400px] max-[414px]:overflow-scroll max-[414px]:px-4">
        <table className="w-[1024px] table-fixed border-spacing-1">
          <thead>
            <tr className="border-b border-gray-200">
              <th></th>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>CPF</Th>
              <Th className="pl-4">DDD</Th>
              <Th>Número</Th>
              <Th>Adicionado</Th>
              <Th>Atualizado</Th>
              <th></th>
            </tr>
          </thead>

          <tbody className="before-tbody">
            <tr className="h-14 border-b border-gray-200">
              <td>
                <Checkbox
                  checked={isShowingDeleteBtn}
                  onChange={setIsShowingDeleteBtn}
                />
              </td>
              <Td>
                <span className="block w-24 truncate">Jhon doe</span>
              </Td>
              <Td>
                <span className="block w-24 truncate">jhondoe@gmail.com</span>
              </Td>
              <Td>134.607.274-09</Td>
              <Td className="pl-4">82</Td>
              <Td>9 99990906</Td>
              <Td>10/06/2023</Td>
              <Td>16/06/2023</Td>
              <td className="text-center">
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

      <div className="mx-auto mt-4">
        <Pagnination
          totalCount={300}
          currentPage={currentPage}
          baseUrl="/customers?page"
        />
      </div>
    </div>
  )
}
