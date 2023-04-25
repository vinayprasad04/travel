import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "12345",
  host: "192.168.1.160",
  port: "5432",
  database: "Neom",
});
if (pool) {
  console.log("db connected success!!!!!");
}
export default pool;
