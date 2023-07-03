import { ProductForm } from './components/ProductForm'

export default function Restore() {
  return (
    <div className="mx-auto flex h-full w-full max-w-[1126px] flex-col items-center py-4">
      <h1 className="mt-4 text-2xl font-semibold text-zinc-900">
        Adicione um novo produto
      </h1>

      <div className="mx-auto w-full max-w-3xl">
        <ProductForm />
      </div>
    </div>
  )
}
