'use client'

import { Checkbox } from '@/app/(panel)/components/Checkbox'
import { Select } from '@/app/(panel)/components/Select'
import { SelectItem } from '@/app/(panel)/components/Select/SelectItem'
import { Td } from '@/app/(panel)/components/table/Td'
import { Th } from '@/app/(panel)/components/table/Th'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { data } from '../data'
import { Tooltip } from '@/app/(panel)/components/Tooltip'

export function ProductImagesContent() {
  const [selectedProductImgs, setSelectedProductImgs] = useState<string[]>([])

  function handleToggleSelectImage(imageId: string) {
    const imageAlreadySelected = selectedProductImgs.some(
      (productImgId) => productImgId === imageId,
    )

    if (imageAlreadySelected) {
      setSelectedProductImgs(
        selectedProductImgs.filter((productImgId) => productImgId !== imageId),
      )
    } else {
      setSelectedProductImgs((state) => [...state, imageId])
    }
  }

  return (
    <div className="flex w-full flex-col gap-5">
      <Select placeholder="Selecione um produto">
        <SelectItem value="26526352635">Camiseta preta</SelectItem>
        <SelectItem value="476763476346">Camiseta branca</SelectItem>
        <SelectItem value="fdjh45h45hg45">Camiseta azul</SelectItem>
      </Select>

      <div>
        <table className="mt-10 w-full table-fixed border-spacing-1">
          <thead>
            <tr className="border-b border-gray-200">
              <th></th>
              <Th>Imagem</Th>
              <Th>Nome</Th>
              <Th>Tamanho</Th>
              <Th>Adicionada em</Th>
              <th>
                {selectedProductImgs.length > 0 && (
                  <button className="rounded-full p-2 transition-all hover:bg-gray-200">
                    <Trash2 className="h-5 w-5 stroke-purple-700" />
                  </button>
                )}
              </th>
            </tr>
          </thead>

          <tbody className="before-tbody">
            {data.map((productImg) => (
              <tr key={productImg.id} className="border-b border-gray-200">
                <td>
                  <div className="flex items-center justify-center">
                    <Checkbox
                      checked={selectedProductImgs.some(
                        (productImgId) => productImgId === productImg.id,
                      )}
                      onChange={() => handleToggleSelectImage(productImg.id)}
                    />
                  </div>
                </td>

                <td>
                  <div className="py-2">
                    <Image
                      src={productImg.src}
                      alt=""
                      width={120}
                      height={120}
                      className="h-10 w-10 rounded-md object-cover"
                    />
                  </div>
                </td>

                <Td>
                  <Tooltip content={productImg.name} side="top">
                    <span className="block w-24 truncate">
                      {productImg.name}
                    </span>
                  </Tooltip>
                </Td>

                <Td>{productImg.size}</Td>

                <Td>{productImg.createdAt}</Td>

                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
