// импортируем pool для работы с БД
import db from "../bd.js"

class UserControllers {
    // создание пользователя
    async createUser(req, res){
        const {name, surname} = req.body
        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        // в ответе нам нужен именно ключ rows - этом ассив с одним элементом, он нам и нужен
        res.json(newPerson.rows[0]) 
    }
    // получение всех пользователей
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM person')
        // возвращаем массив пользовтаелей
        res.json(users.rows)
    }
    // получение одного пользователя
    async getOneUser(req, res){
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id=$1', [id])
        // возвращаем пользователя
        res.json(user.rows)

    }
    // редактирвоание пользователя
    async updateUser(req, res){
        const {id, name, surname} = req.body
        // обновить запись в таблице person меняем имя и фамилию где id равен тому что получили в body
        const user = await db.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *', [name, surname, id])
        res.json(user.rows)
    }
    // удаление пользователя
    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id=$1', [id])
        // возвращаем пользователя
        res.json({message: 'OK'})
    }
}

export default new UserControllers()


