import { IProductImagesRepository } from '@app/repositories/IProductImagesRepository'

interface Request {
  productId: string
  imagesIds: string[]
}

type Response = void

export class RemoveProductImagesUseCase {
  constructor(private productImagesRepo: IProductImagesRepository) {}

  async execute({ imagesIds, productId }: Request): Promise<Response> {
    await this.productImagesRepo.delete(imagesIds, productId)
  }
}
