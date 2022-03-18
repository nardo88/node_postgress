import Router from 'express'
// импортируем контроллер который только что создали
import userControllers from '../controllers/user.controllers.js'
// создаем router
const router = new Router()
// на каждый метод создаем свой эндпоинт
router.post('/user', userControllers.createUser)
router.get('/user/:id', userControllers.getOneUser)
router.get('/user', userControllers.getUsers)
router.put('/user', userControllers.updateUser)
router.delete('/user/:id', userControllers.deleteUser)
// не забываем экспортировать router
export default router


