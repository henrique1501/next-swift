import { User } from 'lucide-react'

interface UserPlaceholderProps {
  size?: 'lg' | 'sm'
}

export function UserPlaceholder({ size = 'sm' }: UserPlaceholderProps) {
  return (
    <div
      className={`flex ${
        size === 'lg' ? 'h-[100px] w-[100px]' : 'h-10 w-10'
      } items-center justify-center rounded-full bg-gray-100`}
    >
      <User
        className={`${
          size === 'lg' ? 'h-[50px] w-[50px]' : 'h-6 w-6'
        } stroke-gray-500`}
      />
    </div>
  )
}
