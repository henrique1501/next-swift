import { Image } from '@app/entities/Product/Image'

export interface IProductImagesRepository {
  findManyById(imageIds: string[]): Promise<Image[] | null>
  create(images: Image[]): Promise<void>
  delete(imagesIds: string[], productId: string): Promise<void>
}
