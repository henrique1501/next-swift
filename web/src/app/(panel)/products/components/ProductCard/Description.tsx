interface DescriptionProps {
  content?: string
}

export function Description({ content }: DescriptionProps) {
  return (
    <div className="desc-container">
      <p className="desc text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur. Tortor mauris imperdiet ultrices
        aliquet. Netus varius sit lorem consectetur consequat.
      </p>
    </div>
  )
}
