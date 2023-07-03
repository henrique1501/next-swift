'use client'

import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { SelectItem } from './SelectItem'

export function QuantitySelect() {
  return (
    <Select.Root>
      <Select.Trigger className="flex w-32 items-center justify-center rounded-md border border-gray-200 p-2 text-xs font-semibold text-purple-700 focus:outline-none">
        <Select.Value placeholder="Quantidade" />
        <Select.Icon>
          <ChevronDown className="h-5 w-5" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          className="mt-2 w-32 overflow-hidden rounded-md border-l border-r border-t border-gray-200 bg-white focus:outline-none"
        >
          <Select.Viewport>
            <Select.Group>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
