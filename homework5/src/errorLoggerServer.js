import express from "express";
import fs from "fs/promises";

const { PORT } = process.env;

function errorLoggerServer() {
  const app = express();

  app.get("/", async (req, res) => {
    try {
      throw new Error("Test server error");
    } catch (err) {
      const logMessage =
        `${new Date().toLocaleString()} - ${err.message}\n`;

      try {
        await fs.appendFile("./errors.log", logMessage);
      } catch (fileError) {
        console.error("Ошибка при записи в лог:", fileError);
      }

      res.status(500).send("Internal Server Error");
    }
  });

  const port = Number(PORT) || 3000;
  app.listen(port, () => console.log(`Server running on ${port} port`));
}

export default errorLoggerServer;
