import db from "../bd.js"

class PostController {
    // создание поста
    async createPost(req, res){
        const {title, content, userId} = req.body
        const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, userId])
        // в ответе нам нужен именно ключ rows - этом ассив с одним элементом, он нам и нужен
        res.json(newPost.rows[0]) 

    }
    // получаем посты по пользователю
    async getPostsByUser(req, res){
        const id = req.params.id
        const posts = await db.query('SELECT * FROM post where user_id=$1', [id])
        // возвращаем пользователя
        res.json(posts.rows)
    }
}

export default new PostController()

