import { CategoriesForm } from './components/CategoriesForm'
import { CategoriesTable } from './components/CategoriesTable'

export default function Categories() {
  return (
    <div className="mx-auto h-full w-full max-w-[768px] py-4">
      <CategoriesForm />

      <CategoriesTable />
    </div>
  )
}
