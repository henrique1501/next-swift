import { XCircle } from 'lucide-react'
import { MouseEvent, useState } from 'react'
import { motion } from 'framer-motion'

interface TagInputProps {
  value?: string[]
}

export function TagInput({ value = [] }: TagInputProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>(value)
  const [tagContent, setTagContent] = useState('')

  function handleAddTag(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    if (tagContent !== '') {
      e.preventDefault()

      setSelectedTags([...selectedTags, tagContent])
      setTagContent('')
    }
  }

  function handleRemoveTag(i: number) {
    setSelectedTags(selectedTags.filter((_, index) => index !== i))
  }

  return (
    <div>
      <h3 className="text-sm font-medium text-zinc-900">Categorias</h3>
      <div className="mt-1 flex flex-col gap-2 rounded-md border-2 border-gray-200 p-2 transition-colors focus-within:border-purple-700">
        {selectedTags.length > 0 && (
          <ul className="flex flex-wrap items-center gap-2">
            {selectedTags.map((tagContent, i) => (
              <motion.li
                key={i}
                className="flex h-8 items-center justify-center gap-2 rounded-md bg-gray-50 px-3"
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{
                  scale: 0,
                  opacity: 0,
                }}
                transition={{ duration: 0.6, type: 'spring' }}
              >
                <span className="text-xs">{tagContent}</span>
                <button type="button" onClick={() => handleRemoveTag(i)}>
                  <XCircle className="h-5 w-5 fill-purple-700 stroke-white" />
                </button>
              </motion.li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={tagContent}
            onChange={(e) => setTagContent(e.target.value)}
            placeholder="Adicione uma categoria"
            className="flex-1 focus:outline-none"
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
