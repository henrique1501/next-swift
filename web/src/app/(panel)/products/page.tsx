import { cookies } from 'next/headers'

import { api } from '@/libs/api'
import { ProductsContent } from './ProductsContent'
import { SearchProductsForm } from './components/SearchProductsForm'

export default async function Products() {
  const token = cookies().get('token')?.value

  const response = await api.get('/products', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const productsData = response.data

  console.log(productsData)

  return (
    <>
      <div className="border-b border-b-gray-200 py-4">
        <div className="mx-auto flex h-full w-full max-w-[1126px] items-center">
          <SearchProductsForm />
        </div>
      </div>

      <ProductsContent />
    </>
  )
}
