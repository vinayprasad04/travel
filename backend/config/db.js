import pg from 'pg';


const pool = new pg.Pool(
{
    host:'192.168.1.160',
    user:'postgres',
    password:'12345',
    database:'Neom'

});

export default pool;