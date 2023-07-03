import { ReactNode } from 'react'

interface BadgeProps {
  isActive?: boolean
  children: ReactNode
}

export function Badge({ isActive = false, children }: BadgeProps) {
  return (
    <button
      className={`h-10 w-32 rounded-md px-6 font-semibold transition-all  ${
        isActive
          ? 'bg-purple-700 text-white hover:brightness-90'
          : 'border border-gray-200 text-gray-300 hover:bg-gray-50'
      }`}
    >
      {children}
    </button>
  )
}
