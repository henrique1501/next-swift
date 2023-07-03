import { Router } from 'express'
import { AddCustomerController } from '../controllers/customers/AddCustomerController'
import { GetManyCustomersController } from '../controllers/customers/GetManyCustomersController'
import { RemoveCustomerController } from '../controllers/customers/RemoveCustomerController'
import { UpdateCustomerInfoController } from '../controllers/customers/UpdateCustomerInfoController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { is } from '../middlewares/permissions'

const customerRoute = Router()

const getManyCustomersController = new GetManyCustomersController()
const addCustomerController = new AddCustomerController()
const removeCustomerController = new RemoveCustomerController()
const updateCustomerInfoController = new UpdateCustomerInfoController()

customerRoute.get(
  '/search',
  ensureAuthenticated,
  getManyCustomersController.handle,
)

customerRoute.post(
  '/',
  ensureAuthenticated,
  is(['admin']),
  addCustomerController.handle,
)

customerRoute.patch(
  '/remove',
  ensureAuthenticated,
  is(['admin']),
  removeCustomerController.handle,
)

customerRoute.put(
  '/update',
  ensureAuthenticated,
  is(['admin']),
  updateCustomerInfoController.handle,
)

export { customerRoute as customersRoutes }
