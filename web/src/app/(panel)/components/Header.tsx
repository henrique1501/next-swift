import { User } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky left-0 right-0 top-0 z-20 hidden h-16 items-center justify-between border-b border-b-gray-200 px-20 lg:flex">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-900">
          Seja bem vindo, <span className="text-purple-700">Jhon!</span>
        </h2>

        <span className="text-sm text-gray-300">
          Encontre tudo o que precisa aqui{' '}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-base font-medium text-gray-300">Admin</span>

        <Link
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"
        >
          <User className="h-6 w-6 stroke-gray-500" />
        </Link>
      </div>
    </header>
  )
}
