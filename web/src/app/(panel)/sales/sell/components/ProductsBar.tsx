import * as ToggleGroup from '@radix-ui/react-toggle-group'

import { ProductPreview } from './ProductPreview'

export function ProductsBar() {
  return (
    <ToggleGroup.Root type="single" className="mt-2 space-x-2">
      <ProductPreview value="sdjhsd7sd" />
      <ProductPreview value="hj23hj23" />
      <ProductPreview value="jh45jh45jh" />
      <ProductPreview value="vcjvc89v" />
    </ToggleGroup.Root>
  )
}
