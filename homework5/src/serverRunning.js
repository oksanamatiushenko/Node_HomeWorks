import express from "express";
import cors from "cors";
import "dotenv/config";

const { PORT } = process.env;

const serverRunning = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use((req, res) => {
    const { authorization } = req.headers;
    console.log("Authorization:", authorization);

    if (!authorization) {
      return res.status(401).type("text").send("Unauthorized");
    }

    res.type("text").send("Authorization header received");
  });

  const port = Number(PORT) || 3000;

  app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default serverRunning;
