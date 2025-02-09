import 'dotenv/config';
import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());
app.use(cors());

// app.use(routes);

// app.use(AppError);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})