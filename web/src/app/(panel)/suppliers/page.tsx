import { SuppliersContent } from './components/SuppliersContent'

export default function Suppliers() {
  return (
    <div className="mx-auto flex h-full w-full max-w-[1126px] flex-col items-center py-4">
      <h1 className="mt-4 text-2xl font-semibold text-zinc-900">
        Visualize todos os fornecedores
      </h1>

      <div className="mt-10 flex flex-col gap-4">
        <SuppliersContent />
      </div>
    </div>
  )
}
