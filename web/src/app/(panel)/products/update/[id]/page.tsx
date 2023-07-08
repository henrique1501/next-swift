import { ProductForm } from '../components/ProductForm'

export default function Update() {
  return (
    <div className="flex h-full w-full flex-col items-center p-4 py-4 lg:mx-auto lg:max-w-[1126px] lg:p-0">
      <h1 className="mt-4 text-2xl font-semibold text-zinc-900">
        Atualize um produto
      </h1>

      <div className="mx-auto w-full max-w-3xl">
        <ProductForm />
      </div>
    </div>
  )
}
