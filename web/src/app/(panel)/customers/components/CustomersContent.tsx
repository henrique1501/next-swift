import { Trash2 } from 'lucide-react'
import { Checkbox } from '../../components/Checkbox'
import { QuantitySelect } from '../../components/QuantitySelect'
// import { Tooltip } from '../../components/Tooltip'
import { Td } from '../../components/table/Td'
import { Th } from '../../components/table/Th'

export function CustomersContent() {
  return (
    <>
      <div className="ml-auto">
        <QuantitySelect />
      </div>

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
              <Checkbox />
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
              <button className="rounded-full p-2 transition-all hover:bg-gray-200">
                <Trash2 className="h-5 w-5 stroke-purple-700" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}