import { CategoriesForm } from './components/CategoriesForm'
import { CategoriesTable } from './components/CategoriesTable'

export default function Categories() {
  return (
    <div className="h-full w-full p-4 lg:mx-auto lg:max-w-[768px]">
      <CategoriesForm />

      <CategoriesTable />
    </div>
  )
}
