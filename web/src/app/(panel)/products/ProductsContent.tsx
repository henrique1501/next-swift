'use client'

import { motion } from 'framer-motion'

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
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.li
            key={index}
            initial={{
              opacity: 0,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: index * 0.3 }}
          >
            <ProductCard />
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
