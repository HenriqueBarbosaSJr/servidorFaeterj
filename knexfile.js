import 'dotenv/config';

export default{
    client:'postgresql',
    connection: process.env.DATABASE_URL
}
