/* eslint-disable no-async-promise-executor */
import { createReadStream } from 'node:fs'

import {
  IProductsExcelProvider,
  ProductData,
} from '@app/providers/IProductsExcelProvider'
import { parse } from 'fast-csv'

export class FastCsvProductsExcelProvider implements IProductsExcelProvider {
  async load(file: Express.Multer.File): Promise<ProductData[]> {
    return new Promise(async (resolve, reject) => {
      const productsData: ProductData[] = []

      try {
        const productsStream = createReadStream(file.path).pipe(
          parse({ headers: true }),
        )

        productsStream.on('error', (error) => {
          reject(error)
        })

        productsStream.on('data', async (row: ProductData) => {
          const data = row

          productsData.push(data)
        })

        productsStream.on('end', () => {
          resolve(productsData)
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}
