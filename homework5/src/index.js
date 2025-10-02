import express from "express";
import fs from "fs";

const { PORT } = process.env;

const app = express();
const port = Number(PORT) || 3000;

app.get("/", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res.status(401).type("text/plain").send("Unauthorized");
  } else {
    res.status(200).type("text/plain").send("Authorization header received");
  }
});

app.get("/error", (req, res) => {
  try {
    throw new Error("Тестовая ошибка");
  } catch (err) {
    fs.appendFile("errors.log", `${new Date()} - ${err.message}\n`, (error) => {
      if (error) console.error("Ошибка при записи в файл:", error);
    });
    res.status(500).type("text/plain").send("Internal Server Error");
  }
});

app.put("/", (req, res) => {
  res.status(200).type("text/plain").send("PUT-запрос обработан");
});

app.delete("/", (req, res) => {
  res.status(200).type("text/plain").send("DELETE-запрос обработан");
});

app.listen(3000, () => console.log(`Server running on ${port} port!`));
