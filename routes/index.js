import { Router } from 'express'
import { controllerIndex } from '../controladores/index.js'

const router = Router()

router.get('/', controllerIndex)

export default router