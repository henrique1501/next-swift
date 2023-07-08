import * as PrimitveSelect from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

interface SelectProps {
  placeholder?: string
  size?: 'sm' | 'lg'
  children: ReactNode
}

export function Select({ placeholder, size = 'lg', children }: SelectProps) {
  return (
    <PrimitveSelect.Root>
      <PrimitveSelect.Trigger
        className={`${
          size === 'sm' ? 'w-[258px]' : 'w-full'
        } flex items-center justify-between rounded-md border border-gray-200 p-2 text-sm font-medium text-gray-900 focus:outline-none`}
      >
        <PrimitveSelect.Value placeholder={placeholder} />
        <PrimitveSelect.Icon>
          <ChevronDown className="h-5 w-5 stroke-purple-700" />
        </PrimitveSelect.Icon>
      </PrimitveSelect.Trigger>

      <PrimitveSelect.Portal>
        <PrimitveSelect.Content
          position="popper"
          className={`mt-2 ${
            size === 'sm' ? 'w-[258px]' : 'w-[768px]'
          } overflow-hidden rounded-md border-l border-r border-t border-gray-200 bg-white focus:outline-none max-[414px]:w-[360px]`}
        >
          <PrimitveSelect.Viewport>
            <PrimitveSelect.Group>{children}</PrimitveSelect.Group>
          </PrimitveSelect.Viewport>
        </PrimitveSelect.Content>
      </PrimitveSelect.Portal>
    </PrimitveSelect.Root>
  )
}