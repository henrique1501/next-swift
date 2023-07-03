'use client'

import * as Popover from '@radix-ui/react-popover'

import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { CalendarDays } from 'lucide-react'
import { Calendar } from './Calendar'

dayjs.locale(ptBr)

interface DatepickerProps {
  selectedDate: Date | null
  onDateSelected: (date: Date) => void
  comparedDate: Date | null
  label: string
}

export function Datepicker({
  selectedDate,
  onDateSelected,
  comparedDate,
  label,
}: DatepickerProps) {
  return (
    <Popover.Root>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium text-zinc-900">{label}</h3>

        <Popover.Trigger asChild>
          <button
            type="button"
            className="flex items-center gap-2 rounded-md bg-gray-50 p-2 transition-all hover:brightness-95"
          >
            <CalendarDays className="h-6 w-6 stroke-gray-300" />{' '}
            <span className="text-sm font-medium text-gray-300">
              {selectedDate
                ? dayjs(selectedDate).format('DD/MM/YYYY')
                : dayjs(new Date()).format('DD/MM/YYYY')}
            </span>
          </button>
        </Popover.Trigger>
      </div>

      <Popover.Portal>
        <Popover.Content className="mt-2">
          <Calendar
            selectedDate={selectedDate}
            onDateSelected={onDateSelected}
            comparedDate={comparedDate}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
