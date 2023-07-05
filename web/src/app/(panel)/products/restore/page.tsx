import { RotateCcw } from 'lucide-react'
import Image from 'next/image'
import { Checkbox } from '../../components/Checkbox'
import { QuantitySelect } from '../../components/QuantitySelect'
import { Td } from '../../components/table/Td'
import { Th } from '../../components/table/Th'

export default function Restore() {
  return (
    <div className="mx-auto flex h-full w-full max-w-[1126px] flex-col items-center py-4">
      <h1 className="mt-4 text-2xl font-semibold text-zinc-900">
        Resgate produtos removidos
      </h1>

      <div className="mt-10 flex flex-col gap-4">
        <div className="ml-auto w-fit">
          <QuantitySelect />
        </div>
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
                <div className="w-24">
                  <span className="block truncate" title="Camiseta branca">
                    Camiseta branca
                  </span>
                </div>
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
    </div>
  )
}
