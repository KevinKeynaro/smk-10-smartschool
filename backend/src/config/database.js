import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'db_name', // Ganti dengan nama database kita
});

export default pool