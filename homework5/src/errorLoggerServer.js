import express from "express";
import fs from "fs";

const { PORT } = process.env;

function errorLoggerServer() {
  const app = express();

  app.get("/", function (req, res) {
    try {
      throw new Error("Test server error");
    } catch (err) {
      const logMessage =
        new Date().toLocaleString() + " - " + err.message + "\n";

      fs.appendFile("./errors.log", logMessage, function (error) {
        if (error) {
          console.log("Ошибка при записи в лог:", error);
        }
      });
      res.status(500).send("Internal Server Error");
    }
  });

  const port = Number(PORT) || 3000;

  app.listen(port, () => console.log(`Server running on ${port} port`));
}

export default errorLoggerServer;
