import { EmployeesContent } from './components/EmployeesContent'

export default function Employees() {
  return (
    <div className="flex h-full w-full flex-col items-center p-4 lg:mx-auto lg:max-w-[1126px]">
      <h1 className="mt-4 text-2xl font-semibold text-zinc-900 max-[414px]:text-center">
        Visualize todos os funcionários
      </h1>

      <EmployeesContent />
    </div>
  )
}
