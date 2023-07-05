import Image from 'next/image'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ImagePreview } from './ImagePreview'

type PreviewImage = {
  file: File
  url: string
}

export function Dropzone() {
  const [previewImages, setPreviewImages] = useState<PreviewImage[]>([])

  const onDrop = useCallback((files: File[]) => {
    const imagesUrls = files.map((fileContent) => {
      return {
        file: fileContent,
        url: URL.createObjectURL(fileContent),
      }
    })

    setPreviewImages((oldPreviewImages) => [...oldPreviewImages, ...imagesUrls])
  }, [])

  function removeImage(index: number) {
    setPreviewImages(previewImages.filter((_, i) => i !== index))
  }

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        'image/*': ['.png', '.jpeg', '.jpg'],
      },
      onDrop,
    })

  return (
    <div className="flex flex-col gap-4">
      <div
        {...getRootProps()}
        className={`h-60 w-full rounded-lg border-2 border-dashed ${
          isDragAccept ? 'border-purple-700 bg-purple-700/5' : 'border-gray-200'
        } ${isDragReject ? 'border-red-500 bg-red-500/5' : 'border-gray-200'}`}
      >
        <input {...getInputProps()} multiple />

        <div className="flex h-full items-center justify-center">
          <Image
            src="/upload-1.svg"
            alt=""
            width={600}
            height={600}
            className="h-48 w-48 object-cover"
          />

          {isDragAccept && (
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-center text-sm font-medium text-zinc-900">
                Solte suas imagens aqui
              </h3>

              <p className="text-xs text-purple-700">Imagens permitidas</p>
            </div>
          )}

          {isDragReject && (
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-center text-sm font-medium text-zinc-900">
                Arquivo(s) inválido(s)
              </h3>

              <p className="text-xs text-purple-700">
                Extensões permitidas: .png, .jpg, .jpeg
              </p>
            </div>
          )}

          {!isDragAccept && !isDragReject && (
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-sm font-medium text-zinc-900">
                Arraste e solte suas imagens aqui, ou{' '}
                <span className="font-semibold text-purple-700">Procure</span>
              </h3>

              <p className="text-xs text-gray-300">
                Tamanho máximo permitido: 5mb
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-7 items-center gap-4">
        {previewImages.map((preview, index) => (
          <ImagePreview
            key={index}
            url={preview.url}
            name={preview.file.name}
            onRemove={() => removeImage(index)}
          />
        ))}
      </div>
    </div>
  )
}
