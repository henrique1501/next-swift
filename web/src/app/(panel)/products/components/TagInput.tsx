import { XCircle } from 'lucide-react'
import { MouseEvent, useState } from 'react'

interface TagInputProps {
  value?: string[]
}

export function TagInput({ value = [] }: TagInputProps) {
  const [tags, setTags] = useState<string[]>(value)
  const [tagContent, setTagContent] = useState('')

  function handleAddTag(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    if (tagContent !== '') {
      e.preventDefault()

      setTags([...tags, tagContent])
      setTagContent('')
    }
  }

  function handleRemoveTag(i: number) {
    setTags(tags.filter((_, index) => index !== i))
  }

  return (
    <div>
      <h3 className="text-sm font-medium text-zinc-900">Categorias</h3>
      <div className="mt-1 flex flex-wrap items-center gap-2 rounded-md border-2 border-gray-200 p-2 transition-colors focus-within:border-purple-700">
        <ul className="flex flex-wrap items-center gap-2">
          {tags.map((tagContent, i) => (
            <li
              key={i}
              className="flex h-8 items-center justify-center gap-2 rounded-md bg-gray-50 px-3"
            >
              <span className="text-xs">{tagContent}</span>
              <button type="button" onClick={() => handleRemoveTag(i)}>
                <XCircle className="h-5 w-5 fill-purple-700 stroke-white" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={tagContent}
            onChange={(e) => setTagContent(e.target.value)}
            placeholder="Adicione uma categoria"
            className="focus:outline-none"
          />

          <button
            type="button"
            onClick={handleAddTag}
            className="h-8 rounded-md bg-purple-700 px-2 text-sm font-medium text-white"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}
