import express from "express";

const { PORT } = process.env;

function methodsServer() {
  const app = express();
  app.use(express.json());

  app.put("/", (req, res) => {
    res
      .status(200)
      .set("Content-Type", "text/plain")
      .send("PUT-запрос обработан");
  });

  app.delete("/", (req, res) => {
    res
      .status(200)
      .set("Content-Type", "text/plain")
      .send("DELETE-запрос обработан");
  });

  const port = Number(PORT) || 3000;

  app.listen(port, () => console.log(`Server running on ${port} port`));
}

export default methodsServer;
