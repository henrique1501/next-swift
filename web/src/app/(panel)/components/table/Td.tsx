import { ReactNode } from 'react'

interface TdProps {
  children: ReactNode
}

export function Td({ children }: TdProps) {
  return <td className="text-sm text-zinc-900">{children}</td>
}
