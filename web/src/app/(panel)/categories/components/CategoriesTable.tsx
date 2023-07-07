import { Trash2 } from 'lucide-react'
import { Checkbox } from '../../components/Checkbox'
import { Td } from '../../components/table/Td'
import { Th } from '../../components/table/Th'

export function CategoriesTable() {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold text-zinc-900">
        Gerencie todas as categorias
      </h2>

      <table className="mt-10 w-full table-fixed border-spacing-1">
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
              <Checkbox />
            </td>
            <Td>99df9df7f7</Td>
            <Td>Camisas</Td>
            <Td>132</Td>
            <Td>10/06/2023</Td>
            <td className="text-center">
              <button className="rounded-full p-2 transition-all hover:bg-gray-200">
                <Trash2 className="h-5 w-5 stroke-purple-700" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
