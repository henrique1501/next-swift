import * as PrimitveSelect from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { SelectItem } from './SelectItem'

type Option = {
  value: string
  label: string
}

interface SelectProps {
  placeholder?: string
  size?: 'sm' | 'lg'
  options: Option[]
}

export function Select({ placeholder, size = 'lg', options }: SelectProps) {
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
          asChild
          position="popper"
          className={`mt-2 ${
            size === 'sm' ? 'w-[258px]' : 'w-[768px]'
          } overflow-hidden rounded-md border border-gray-200 bg-white focus:outline-none max-[414px]:w-[360px]`}
        >
          <PrimitveSelect.Viewport>
            <PrimitveSelect.Group asChild>
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ type: 'just' }}
                className="divide-y divide-solid divide-gray-200"
              >
                {options.map((option, index) => (
                  <motion.div
                    key={option.value}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1, delay: 0.1 * (index + 1) }}
                  >
                    <SelectItem value={option.value}>{option.label}</SelectItem>
                  </motion.div>
                ))}
              </motion.div>
            </PrimitveSelect.Group>
          </PrimitveSelect.Viewport>
        </PrimitveSelect.Content>
      </PrimitveSelect.Portal>
    </PrimitveSelect.Root>
  )
}
