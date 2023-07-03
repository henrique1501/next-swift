import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { Spinner } from './Spinner'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  color?: 'purple-700' | 'zinc-900'
}

export function Button({
  isLoading = false,
  color = 'purple-700',
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        `flex h-10 w-full items-center justify-center rounded-md px-5 bg-${color} font-semibold text-white transition-all ${
          !isLoading && 'hover:brightness-75'
        } ${isLoading && 'cursor-default opacity-75'}`,
        className,
      )}
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
