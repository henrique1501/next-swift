import { ProductsContent } from './ProductsContent'
import { SearchProductsForm } from './components/SearchProductsForm'

export default function Products() {
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
