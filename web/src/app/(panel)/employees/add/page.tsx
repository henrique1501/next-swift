import { EmployeesForm } from './components/EmployeesForm'

export default function Add() {
  return (
    <div className="mx-auto flex h-full w-full max-w-[1126px] flex-col items-center py-4">
      <h1 className="mt-4 text-2xl font-semibold text-zinc-900">
        Adicione um novo funcionário
      </h1>

      <div className="mx-auto w-full max-w-3xl">
        <EmployeesForm />
      </div>
    </div>
  )
}