'use client'

import { Edit3 } from 'lucide-react'
import { DeleteButton } from './DeleteButton'
import Link from 'next/link'

export function Info() {
  return (
    <div className="flex items-center justify-between gap-5">
      <h2 className="text-sm font-medium text-gray-300">
        <strong className="text-lg text-purple-700">R$67,90</strong> / 3 pcs
      </h2>

      <div className="flex items-center gap-2">
        <Link href={`/products/update/126126`}>
          <Edit3 className="h-5 w-5 stroke-purple-700" />
        </Link>

        <DeleteButton />
      </div>
    </div>
  )
}
