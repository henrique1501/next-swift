/* eslint-disable react/display-name */
import * as Form from '@radix-ui/react-form'
import { AlertCircle } from 'lucide-react'
import {
  HTMLInputTypeAttribute,
  ReactElement,
  ReactSVG,
  forwardRef,
} from 'react'

type ErrorMsg = {
  match: 'valueMissing' | 'typeMismatch'
  msg: string
}

interface InputProps extends Form.FormFieldProps {
  label: string
  type?: HTMLInputTypeAttribute
  errors?: ErrorMsg[]
  value?: string
  prefixIcon?: ReactElement<ReactSVG>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, errors, value, placeholder, prefixIcon, ...rest }, ref) => {
    return (
      <Form.Field {...rest} ref={ref}>
        <Form.Label className="text-sm font-medium text-zinc-900">
          {label}
        </Form.Label>

        <div className="flex flex-col gap-2">
          <div
            className={`flex h-10 items-center overflow-hidden rounded-md border-2 border-gray-200 outline-none transition-colors focus-within:border-purple-700`}
          >
            <div className="relative flex h-full w-full items-center gap-2">
              <div className="absolute left-3">{prefixIcon}</div>
              <Form.Control
                required
                placeholder={placeholder}
                type={type}
                value={value}
                className={`h-full flex-1 ${
                  prefixIcon ? 'pl-11 pr-3' : 'px-3'
                } outline-none placeholder:text-sm`}
              />
            </div>
          </div>

          {errors?.map((err) => (
            <Form.Message
              key={err.match}
              match={err.match}
              className="flex items-center gap-2 text-xs font-medium text-red-500"
            >
              <AlertCircle className="h-4 w-4" /> {err.msg}
            </Form.Message>
          ))}
        </div>
      </Form.Field>
    )
  },
)

// export function Input({
//   name,
//   label,
//   type,
//   placeholder,
//   errors,
//   prefixIcon,
//   className,
// }: InputProps) {
//   return (
//     <Form.Field name={name} className={className}>
//       <Form.Label className="text-sm font-medium text-zinc-900">
//         {label}
//       </Form.Label>

//       <div className="flex flex-col gap-2">
//         <div className="flex h-10 w-full items-center gap-2 rounded-md border-2 border-gray-200 px-3 outline-none transition-colors focus-within:border-purple-700">
//           <div className="flex h-full w-full items-center gap-2 ">
//             {prefixIcon}
//             <Form.Control
//               className="h-full flex-1 outline-none"
//               type={type}
//               required
//               placeholder={placeholder}
//             />
//           </div>
//         </div>

//         {errors.map((err) => (
//           <Form.Message
//             key={err.match}
//             match={err.match}
//             className="flex items-center gap-2 text-xs font-medium text-red-500"
//           >
//             <AlertCircle className="h-4 w-4" /> {err.msg}
//           </Form.Message>
//         ))}
//       </div>
//     </Form.Field>
//   )
// }
