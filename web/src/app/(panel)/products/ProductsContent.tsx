import { AddProductLink } from './components/AddProductLink'
import { CategoriesSlider } from './components/CategoriesSlider'
import { Divider } from './components/Divider'
import { ProductCard } from './components/ProductCard'

export function ProductsContent() {
  return (
    <div className="mx-auto mb-6 mt-2 max-w-[1126px] px-6 lg:px-0">
      <div className="flex items-center justify-between gap-2 md:gap-4">
        <CategoriesSlider />

        <Divider />

        <AddProductLink path="/products/add" />
      </div>

      <ul className="mt-10 flex flex-col items-center gap-4 md:grid md:grid-cols-3 lg:mx-auto lg:flex lg:max-w-6xl lg:flex-row lg:flex-wrap">
        <li>
          <ProductCard />
        </li>

        <li>
          <ProductCard />
        </li>

        <li>
          <ProductCard />
        </li>

        <li>
          <ProductCard />
        </li>

        <li>
          <ProductCard />
        </li>

        <li>
          <ProductCard />
        </li>
      </ul>
    </div>
  )
}
