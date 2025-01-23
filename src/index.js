import dotenv from "dotenv";
import express from "express";
import connection from "./db.js";

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para tratar JSON
app.use(express.json());

// Rota GET para buscar todos os usuários
app.get("/", async (req, res) => {
  try {
    console.log("Fetching data from database");
    const result = await connection.query("SELECT * FROM users");
    return res.json(result.rows);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Rota POST para adicionar um novo usuário
app.post("/", async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  console.log("Received username:", username);

  try {
    console.log("Inserting data into database");
    await connection.query("INSERT INTO users (username) VALUES ($1)", [
      username,
    ]);
    return res.sendStatus(201);
  } catch (error) {
    console.error("Error inserting data:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
