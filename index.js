import express from 'express'
import postRouter from './routers/post.router.js'
import router from './routers/user.routers.js'


const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.use('/api', router)
app.use('/api', postRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))


