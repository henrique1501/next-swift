'use client'

import { ReactNode } from 'react'

interface ThProps {
  children: ReactNode
}

export function Th({ children }: ThProps) {
  return (
    <th className="text-left text-sm font-medium text-gray-300">
      <div className="py-2">{children}</div>
    </th>
  )
}
