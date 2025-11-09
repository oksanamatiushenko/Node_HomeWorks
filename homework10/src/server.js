import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import notFoundHandler from "./middleware/notFoundHandler.js";
import authRouter from "./routers/auth.router.js";

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api/auth", authRouter);

  app.use(errorHandler);
  app.use(notFoundHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT} port`));
};

export default startServer;
