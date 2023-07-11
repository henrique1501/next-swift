import { ReactNode } from 'react'

interface PagninationProps {
  children: ReactNode
}

export function Pagnination({ children }: PagninationProps) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-gray-200 p-2">
      {children}
    </div>
  )
}
