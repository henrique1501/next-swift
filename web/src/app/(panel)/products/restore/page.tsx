import { QuantitySelect } from '../../components/QuantitySelect'
import { RestoreContent } from './components/RestoreContent'

export default function Restore() {
  return (
    <div className="flex h-full w-full flex-col items-center lg:mx-auto lg:max-w-[1126px]">
      <h1 className="mt-4 text-2xl font-semibold text-zinc-900">
        Resgate produtos removidos
      </h1>

      <div className="mt-10 w-fit max-[414px]:ml-4 max-[414px]:mr-auto lg:ml-auto">
        <QuantitySelect />
      </div>

      <RestoreContent />
    </div>
  )
}
