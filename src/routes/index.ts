import { Router, Request, Response } from "express"
import * as homeController from '../controllers/homeController'
import * as userController from '../controllers/userController'

const router = Router()

router.get('/',homeController.home)
router.get('/login',userController.login)
router.get('/idade',userController.idade)
router.post('/idade-resultado',userController.idadeResultado)
router.get('/nome',userController.nome)


export default router