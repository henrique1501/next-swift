import { SellForm } from './components/SellForm'

export default function Sell() {
  return (
    <div className="flex h-full w-full flex-col items-center py-4 lg:mx-auto lg:max-w-[1126px]">
      <h1 className="mt-4 text-2xl font-semibold text-zinc-900">
        Venda um produto
      </h1>

      <div className="mx-auto w-full max-w-3xl">
        <SellForm />
      </div>
    </div>
  )
}
