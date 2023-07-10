import * as PrimitiveAccordion from '@radix-ui/react-accordion'
import { ReactElement, ReactSVG } from 'react'
import { AccordionItem } from './AccordionItem'
import { AccordionTrigger } from './AccordionTrigger'
import { AccordionContent } from './AccordionContent'
import { LinkData } from '../../Sidebar/data'
import Link from 'next/link'

interface AccordionProps {
  value: string
  icon: ReactElement<ReactSVG>
  label: string
  isActive?: boolean
  links: LinkData[]
}

export function Accordion({
  value,
  icon,
  label,
  isActive = false,
  links,
}: AccordionProps) {
  return (
    <PrimitiveAccordion.Root type="single" collapsible>
      <AccordionItem value={value}>
        <AccordionTrigger isActive={isActive}>
          <div className="flex items-center gap-2">
            {icon}

            <span
              className={`font-medium ${
                isActive ? 'text-purple-700' : 'text-gray-300'
              }`}
            >
              {label}
            </span>
          </div>
        </AccordionTrigger>

        <AccordionContent>
          <ul className="mt-2 flex flex-col gap-2 pl-4">
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="text-sm text-gray-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </PrimitiveAccordion.Root>
  )
}
