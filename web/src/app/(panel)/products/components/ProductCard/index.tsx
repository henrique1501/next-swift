import Image from 'next/image'
import { Description } from './Description'
import { Info } from './Info'

export function ProductCard() {
  return (
    <div className="flex h-[300px] w-64 flex-col justify-between rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-product-shadow">
      <Image
        src="/shirt.png"
        alt=""
        width={800}
        height={1920}
        className="h-32 w-56 rounded-lg object-cover"
      />

      <h3 className="font-medium text-zinc-900">Camiseta preta</h3>

      <Description />

      <Info />
    </div>
  )
}
