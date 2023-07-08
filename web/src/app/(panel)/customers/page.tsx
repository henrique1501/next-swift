import { CustomersContent } from './components/CustomersContent'

export default function Customers() {
  return (
    <div className="flex h-full w-full flex-col items-center p-4 lg:mx-auto lg:max-w-[1126px]">
      <h1 className="mt-4 text-2xl font-semibold text-zinc-900">
        Visualize todos os clientes
      </h1>

      <CustomersContent />
    </div>
  )
}
