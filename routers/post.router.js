import Router from 'express'
// импортируем контроллер который только что создали
import postController from '../controllers/post.controller.js'
// создаем router
const postRouter = new Router()
// на каждый метод создаем свой эндпоинт
postRouter.post('/post', postController.createPost)
postRouter.get('/post/:id', postController.getPostsByUser)
// не забываем экспортировать router
export default postRouter


