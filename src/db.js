import dotenv from "dotenv";
import pkg from "pg";

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const { Pool } = pkg;

// Configura a conexão com o banco de dados
const connection = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://user:password@host:port/database",
  ssl: {
    rejectUnauthorized: false,
  },
});

// Evento de conexão bem-sucedida
connection.on('connect', () => {
  console.log('Connected to the database');
});

// Evento de erro na conexão
connection.on('error', (err) => {
  console.error('Database connection error:', err.stack);
});

export default connection;
