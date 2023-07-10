import Image from 'next/image'
import Link from 'next/link'
import { MobileSidebar } from './MobileSidebar'
import { Avatar } from './Avatar'

export function MobileHeader() {
  return (
    <header className="sticky left-0 right-0 top-0 z-20 flex h-16 items-center justify-between border-b border-b-gray-200 px-6 lg:hidden">
      <MobileSidebar />

      <Link href="/dashboard">
        <Image src="/complete-logo.svg" alt="" width={142} height={24} />
      </Link>

      <Link
        href="/profile"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"
      >
        <Avatar />
      </Link>
    </header>
  )
}
