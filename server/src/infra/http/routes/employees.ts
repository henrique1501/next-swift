import { Router } from 'express'
import multer from 'multer'

import { UploaderConfig } from '@infra/config/multer'

import { DismissEmployeeController } from '../controllers/employees/DismissEmployeeController'
import { GetProfileInfoController } from '../controllers/employees/GetProfileInfoController'
import { HireEmployeeController } from '../controllers/employees/HireEmployeeController'
import { ResetPasswordController } from '../controllers/employees/ResetPasswordController'
import { SendForgotPasswordMailController } from '../controllers/employees/SendForgotPasswordMailController'
import { UpdateEmployeeInfoController } from '../controllers/employees/UpdateEmployeeInfoController'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { is } from '../middlewares/permissions'

const employeesRoute = Router()
const uploader = multer(UploaderConfig.execute('avatar'))

const hireEmployeeController = new HireEmployeeController()
const sendForgotPasswordMailController = new SendForgotPasswordMailController()
const resetPasswordController = new ResetPasswordController()
const updateEmployeeInfoController = new UpdateEmployeeInfoController()
const dismissEmployeeController = new DismissEmployeeController()
const getProfileInfoController = new GetProfileInfoController()

employeesRoute.post(
  '/',
  ensureAuthenticated,
  is(['admin']),
  uploader.single('avatar'),
  hireEmployeeController.handle,
)

employeesRoute.post('/password/forgot', sendForgotPasswordMailController.handle)

employeesRoute.patch('/password/reset', resetPasswordController.handle)

employeesRoute.put(
  '/update',
  ensureAuthenticated,
  uploader.single('avatar'),
  updateEmployeeInfoController.handle,
)

employeesRoute.patch(
  '/dismiss',
  ensureAuthenticated,
  is(['admin']),
  dismissEmployeeController.handle,
)

employeesRoute.get('/me', ensureAuthenticated, getProfileInfoController.handle)

export { employeesRoute as employeesRoutes }
