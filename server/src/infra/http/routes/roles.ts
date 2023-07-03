import { Router } from 'express'
import { CreateRoleController } from '../controllers/roles/CreateRoleController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { is } from '../middlewares/permissions'

const roleRoute = Router()

const createRoleController = new CreateRoleController()

roleRoute.post(
  '/',
  ensureAuthenticated,
  is(['admin']),
  createRoleController.handle,
)

export { roleRoute as rolesRoutes }
