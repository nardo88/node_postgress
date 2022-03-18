import Pool from 'pg'
// создаем Pool из библиотеки pg
// поскольку Pool это класс нам необходимо создать объект
// в конструктор класса передаем объект с конфигурацией
const db = new Pool.Pool({
    // имя пользователя - postgres имя админа по умолчанию
    user: 'postgres',
    password: '11!!QQww',
    host: 'localhost',
    // порт по умолчанию 5432
    port: 5432,
    // последнее свойство название БД
    database: 'node_postgress'

})

export default db

