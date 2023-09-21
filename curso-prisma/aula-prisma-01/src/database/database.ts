import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const {
  localhost, 5432: number, admin, admin123, prisma1
} = process.env;

const db = new Pool({
  host: localhost,
  port: parseInt('5432'),
  user: admin,
  password: admin123,
  database: prisma1
});

export default db;