import { Router } from 'express'
import multer from 'multer'

import { UploaderConfig } from '@infra/config/multer'

import { AddProductController } from '../controllers/products/AddProductController'

import { ImportProductController } from '../controllers/products/ImportProductController'
import { RemoveProductController } from '../controllers/products/RemoveProductController'
import { RemoveProductImagesController } from '../controllers/products/RemoveProductImagesController'
import { UpdateProductController } from '../controllers/products/UpdateProductController'
import { UploadProductImagesController } from '../controllers/products/UploadProductImagesController'

import { AddCategoriesToProductController } from '../controllers/products/AddCategoyToProductController'
import { GetManyProductsByCategoryController } from '../controllers/products/GetManyProductsByCategoryController'
import { GetManyProductsBySearchController } from '../controllers/products/GetManyProductsBySearchController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { is } from '../middlewares/permissions'
import { GetAllProductsController } from '../controllers/products/GetAllProductsController'

const productsRoute = Router()
const uploader = multer(UploaderConfig.execute('product'))

const addProductController = new AddProductController()
const removeProductController = new RemoveProductController()
const updateProductController = new UpdateProductController()
const uploadProductImagesController = new UploadProductImagesController()
const removeProductImagesController = new RemoveProductImagesController()
const importProductController = new ImportProductController()
const addCategoriesToProductController = new AddCategoriesToProductController()
const getManyProductsByCategoryController =
  new GetManyProductsByCategoryController()

const getManyProductsBySearchController =
  new GetManyProductsBySearchController()

const getAllProductsController = new GetAllProductsController()

productsRoute.get('/', ensureAuthenticated, getAllProductsController.handle)

productsRoute.get(
  '/get-many-by-category',
  ensureAuthenticated,
  getManyProductsByCategoryController.handle,
)

productsRoute.get(
  '/search',
  ensureAuthenticated,
  getManyProductsBySearchController.handle,
)

productsRoute.post(
  '/',
  ensureAuthenticated,
  is(['admin']),
  uploader.array('image'),
  addProductController.handle,
)

productsRoute.post(
  '/:productId/images/upload',
  ensureAuthenticated,
  is(['admin', 'sub-admin']),
  uploader.array('image'),
  uploadProductImagesController.handle,
)

productsRoute.post(
  '/import',
  ensureAuthenticated,
  is(['admin', 'sub-admin']),
  uploader.single('products-file'),
  importProductController.handle,
)

productsRoute.post(
  '/:productId/add/categories',
  ensureAuthenticated,
  is(['admin']),
  addCategoriesToProductController.handle,
)

productsRoute.put(
  '/:productId/update',
  ensureAuthenticated,
  is(['admin']),
  updateProductController.handle,
)

productsRoute.delete(
  '/:productId/images/remove',
  ensureAuthenticated,
  is(['admin']),
  removeProductImagesController.handle,
)

productsRoute.delete(
  '/remove/:productId',
  ensureAuthenticated,
  is(['admin']),
  removeProductController.handle,
)

export { productsRoute as productsRoutes }
