import * as PrimitiveTooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

interface TooltipProps {
  content: string
  children: ReactNode
}

export function Tooltip({ content, children }: TooltipProps) {
  return (
    <PrimitiveTooltip.Provider>
      <PrimitiveTooltip.Root>
        <PrimitiveTooltip.Trigger asChild>{children}</PrimitiveTooltip.Trigger>

        <PrimitiveTooltip.Portal>
          <PrimitiveTooltip.Content
            className="z-40 ml-2 rounded-md bg-purple-700 p-2 text-xs font-medium text-white"
            side="right"
          >
            {content}
          </PrimitiveTooltip.Content>
        </PrimitiveTooltip.Portal>
      </PrimitiveTooltip.Root>
    </PrimitiveTooltip.Provider>
  )
}
