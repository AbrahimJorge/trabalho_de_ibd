import pkg from 'pg'

const { Pool } = pkg

const dbPostgres = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'livraria_IBD',
    port:5433,
})

export default dbPostgres   