'use client'

import {
  LayoutGrid,
  PackageSearch,
  ShoppingBag,
  Tag,
  Truck,
  Users,
  Users2,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LoggoutButton } from './LoggoutButton'
import { NavLink } from './NavLink'
import { Popover } from './Popover'
import { Tooltip } from './Tooltip'
import {
  customersLinks,
  employeesLinks,
  productsLinks,
  salesLinks,
  suppliersLinks,
} from './data'

export function Sidebar() {
  const pathName = usePathname()

  const isActive = (path: string) => {
    return pathName.startsWith(`/${path}`)
  }

  return (
    <aside className="z-100 sticky bottom-0 left-0 top-0 hidden h-screen w-20 flex-col items-center overflow-auto bg-zinc-900 p-4 lg:flex ">
      <Link href="/dashboard">
        <Image
          src="/purple-logo.svg"
          alt=""
          width={96}
          height={96}
          className="h-8 w-8"
        />
      </Link>

      <nav className="mt-20">
        <ul className="flex flex-col gap-4">
          <Tooltip content="dashboard">
            <div>
              <NavLink path="/dashboard" isActive={isActive('dashboard')}>
                <LayoutGrid
                  className={`h-6 w-6 stroke-white/60 ${
                    isActive('dashboard') && 'stroke-white/100'
                  } ${!isActive('dashboard') && 'hover:stroke-purple-700'}`}
                />
              </NavLink>
            </div>
          </Tooltip>

          <Tooltip content="produtos">
            <div>
              <Popover links={productsLinks}>
                <button
                  className={`flex h-10 w-10 items-center justify-center rounded-md ${
                    isActive('products') && 'bg-purple-700'
                  }`}
                >
                  <PackageSearch
                    className={`h-6 w-6 stroke-white/60 ${
                      isActive('products') && 'stroke-white/100'
                    } ${!isActive('products') && 'hover:stroke-purple-700'}`}
                  />
                </button>
              </Popover>
            </div>
          </Tooltip>

          <Tooltip content="vendas">
            <div>
              <Popover links={salesLinks}>
                <button
                  className={`flex h-10 w-10 items-center justify-center rounded-md ${
                    isActive('sales') && 'bg-purple-700'
                  }`}
                >
                  <ShoppingBag
                    className={`h-6 w-6 stroke-white/60 ${
                      isActive('sales') && 'stroke-white/100'
                    } ${!isActive('sales') && 'hover:stroke-purple-700'}`}
                  />
                </button>
              </Popover>
            </div>
          </Tooltip>

          <Tooltip content="clientes">
            <div>
              <Popover links={customersLinks}>
                <button
                  className={`flex h-10 w-10 items-center justify-center rounded-md ${
                    isActive('customers') && 'bg-purple-700'
                  }`}
                >
                  <Users2
                    className={`h-6 w-6 stroke-white/60 ${
                      isActive('customers') && 'stroke-white/100'
                    } ${!isActive('customers') && 'hover:stroke-purple-700'}`}
                  />
                </button>
              </Popover>
            </div>
          </Tooltip>

          <Tooltip content="funcionários">
            <div>
              <Popover links={employeesLinks}>
                <button
                  className={`flex h-10 w-10 items-center justify-center rounded-md ${
                    isActive('employees') && 'bg-purple-700'
                  }`}
                >
                  <Users
                    className={`h-6 w-6 stroke-white/60 ${
                      isActive('employees') && 'stroke-white/100'
                    } ${!isActive('employees') && 'hover:stroke-purple-700'}`}
                  />
                </button>
              </Popover>
            </div>
          </Tooltip>

          <Tooltip content="categorias">
            <div>
              <NavLink path="/categories" isActive={isActive('categories')}>
                <Tag
                  className={`h-6 w-6 stroke-white/60 ${
                    isActive('categories') && 'stroke-white/100'
                  } ${!isActive('categories') && 'hover:stroke-purple-700'}`}
                />
              </NavLink>
            </div>
          </Tooltip>

          <Tooltip content="fornecedores">
            <div>
              <Popover links={suppliersLinks}>
                <button
                  className={`flex h-10 w-10 items-center justify-center rounded-md ${
                    isActive('suppliers') && 'bg-purple-700'
                  }`}
                >
                  <Truck
                    className={`h-6 w-6 stroke-white/60 ${
                      isActive('suppliers') && 'stroke-white/100'
                    } ${!isActive('suppliers') && 'hover:stroke-purple-700'}`}
                  />
                </button>
              </Popover>
            </div>
          </Tooltip>
        </ul>
      </nav>

      <LoggoutButton />
    </aside>
  )
}
