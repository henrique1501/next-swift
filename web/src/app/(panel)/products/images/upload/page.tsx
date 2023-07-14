import { ProductImagesForm } from './components/ProductImagesForm'

export default function ProductImagesUpload() {
  return (
    <div className="flex h-full w-full flex-col items-center lg:mx-auto lg:max-w-[1126px]">
      <h1 className="mt-4 text-2xl font-semibold text-zinc-900">
        Adicione imagens a um produto
      </h1>

      <div className="mx-auto mt-10 w-full max-w-3xl">
        <ProductImagesForm />
      </div>
    </div>
  )
}
