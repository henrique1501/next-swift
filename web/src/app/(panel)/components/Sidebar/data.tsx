import { LinkData } from './Popover'

export const productsLinks: LinkData[] = [
  {
    label: 'Visualizar todos os produtos',
    path: '/products',
  },
  {
    label: 'Adicionar um produto',
    path: '/products/add',
  },
  {
    label: 'Atualizar um produto',
    path: '/products/update/23',
  },
  {
    label: 'Resgatar produtos',
    path: '/products/restore',
  },
]

export const salesLinks: LinkData[] = [
  {
    label: 'Relatório de vendas',
    path: '/sales',
  },
  {
    label: 'Vender um produto',
    path: '/sales/sell',
  },
]

export const customersLinks: LinkData[] = [
  {
    label: 'Visualizar todos os clientess',
    path: '/customers',
  },
  {
    label: 'Adicionar um novo cliente',
    path: '/customers/add',
  },
  {
    label: 'Atualizar um cliente',
    path: '/customers/update/1234',
  },
]

export const employeesLinks: LinkData[] = [
  {
    label: 'Visualizar todos os funcionários',
    path: '/employees',
  },
  {
    label: 'Adicionar um novo funcionário',
    path: '/employees/add',
  },
]

export const suppliersLinks: LinkData[] = [
  {
    label: 'Visualizar todos os fornecedores',
    path: '/suppliers',
  },
  {
    label: 'Adicionar um novo fornecedor',
    path: '/suppliers/add',
  },
]
