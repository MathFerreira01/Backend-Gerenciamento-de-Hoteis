import pkg from 'pg';
const { Pool } = pkg;

const dbConnect = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hotel',
    password: '123456789',
    port: 5432,
})

export default dbConnect;