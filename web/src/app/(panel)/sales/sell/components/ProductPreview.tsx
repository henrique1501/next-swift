import * as ToggleGroup from '@radix-ui/react-toggle-group'
import Image from 'next/image'

interface ProductPreviewProps {
  value: string
}

export function ProductPreview({ value }: ProductPreviewProps) {
  return (
    <ToggleGroup.Item
      value={value}
      className="rounded-md border-2 border-gray-200 p-2 transition-all hover:bg-gray-50 data-[state=on]:border-purple-700 data-[state=on]:bg-gray-50"
    >
      <Image
        src="/shirt.png"
        alt=""
        width={288}
        height={192}
        className="h-12 w-20 rounded-md object-cover"
      />

      <div className="w-20">
        <span className="block truncate text-xs" title="camiseta preta">
          camiseta preta
        </span>
      </div>
    </ToggleGroup.Item>
  )
}
